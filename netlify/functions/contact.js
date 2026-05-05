const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { name, email, phone, service, message } = body;

  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Missing required fields' };
  }

  // ─── Configure your email transport below ───────────────────────────────────
  // Set these as Netlify environment variables in your site dashboard:
  //   EMAIL_USER  → your Gmail or SMTP username
  //   EMAIL_PASS  → your app password (Gmail: enable 2FA, generate App Password)
  //   EMAIL_TO    → where enquiries land (e.g. info@oseiproperty.com)
  // ─────────────────────────────────────────────────────────────────────────────

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Osei Property Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Enquiry from ${name} — ${service || 'General'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0;">
        <div style="background: #0a1628; padding: 28px 32px;">
          <h1 style="color: #c9a84c; font-size: 22px; margin: 0; letter-spacing: 1px;">OSEI Property Solutions</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 4px 0 0; letter-spacing: 2px; text-transform: uppercase;">New Website Enquiry</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0a1628; width: 140px; font-size: 13px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0a1628; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0a1628; font-size: 13px;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0a1628; font-size: 13px;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;">${service || 'Not specified'}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; color: #0a1628; font-size: 13px; margin-bottom: 8px;">Message:</p>
            <div style="background: #fff; border-left: 3px solid #c9a84c; padding: 16px 20px; font-size: 14px; color: #444; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div style="background: #0a1628; padding: 16px 32px; text-align: center;">
          <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">This message was submitted via the Osei Property Solutions website contact form.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Email error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
