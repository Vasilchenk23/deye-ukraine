import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !phone || !message) {
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
      from: process.env.EMAIL,
      to: process.env.EMAIL, 
      subject: `🛒 Новое сообщение от ${name}`,
      html: `
        <h2>🛍️ Новый вопрос от клиента</h2>
        <p><strong>Имя:</strong> ${name} 👤</p>
        <p><strong>Телефон:</strong> ${phone} 📞</p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Сообщение:</strong> ${message} </p>
      `,
    });

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const telegramMessage = `
          🛍️ <b>Новый вопрос от клиента</b>
          👤<b>Имя:</b> ${name}
          📞<b>Телефон:</b> ${phone}
          <b>Email:</b> ${email}
          <b>Сообщение:</b> ${message}
          `;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email or Telegram message:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email or Telegram message' }), { status: 500 });
  }
}

