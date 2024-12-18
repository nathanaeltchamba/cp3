import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Setup nodemailer transport
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: 'admin@cp3plumbing.com', 
            to: 'admin@cp3plumbing.com',     
            replyTo: email,                  
            subject: `Thank You For Reaching Out To CP3 Plumbing`,
            text: message,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ status: 'success', message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ status: 'error', message: 'Internal Server Error' }), { status: 500 });
    }
}
