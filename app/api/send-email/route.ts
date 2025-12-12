import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, reCaptchaToken } = await req.json();

    // Verify reCAPTCHA
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

    if (!verifyData.success) {
      console.error("reCAPTCHA failed:", verifyData);
      return new Response(
        JSON.stringify({ message: "reCAPTCHA failed" }),
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

    const autoReplyOptions = {
      from: `"no-reply@cp3plumbing" <no-reply@cp3plumbing.com>`,
      to: email,
      subject: "We've Received Your Inquiry - CP3 Plumbing",
      text: `Hello ${name},\n\nThank you for reaching out to CP3 Plumbing. We will contact you shortly.`,
    };


    // Send admin email
    await transporter.sendMail(companyMailOptions);

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

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
