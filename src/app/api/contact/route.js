import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL, //
      subject: `Новое сообщение от ${name}`,
      text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nСообщение: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
