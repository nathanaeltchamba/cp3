import nodemailer from "nodemailer";

// Rate limiter: max 3 requests per IP per 60 seconds
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now - entry.timestamp > WINDOW_MS) {
    ipRequestMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  try {
    // Block IPs that exceed rate limit
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ message: "Too many requests. Please wait a moment and try again." }),
        { status: 429 }
      );
    }

    const { name, email, message, reCaptchaToken, honeypot } = await req.json();

    // Silently discard bot submissions
    if (honeypot) {
      return new Response(
        JSON.stringify({ message: "Message sent successfully!" }),
        { status: 200 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email address." }),
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token and score
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${reCaptchaToken}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      console.error("reCAPTCHA failed:", verifyData);
      return new Response(
        JSON.stringify({ message: "reCAPTCHA verification failed. Please try again." }),
        { status: 400 }
      );
    }

    // Configure email sender
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const companyMailOptions = {
      from: "admin@cp3plumbing.com",
      to: "admin@cp3plumbing.com",
      replyTo: email,
      subject: `New Inquiry from CP3 Plumbing Website: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(companyMailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}