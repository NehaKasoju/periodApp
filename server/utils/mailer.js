const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function sendResetEmail(to, token) {
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5500'}/reset-password.html?token=${token}`;
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Password Reset - Menstrual Health App',
    html: `<p>You requested a password reset. <a href="${resetUrl}">Click here to reset your password</a>.<br>If you did not request this, please ignore this email.</p>`
  });
}

module.exports = { sendResetEmail }; 