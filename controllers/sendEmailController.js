require('dotenv').config();
const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (userEmail, userName) => {
  // Configure the SMTP settings
  const config = {
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ACCOUNT,
      pass: process.env.APP_PASSWORD
    }
  };

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(config);

  // Create the email message
  const message = {
    from: process.env.GMAIL_ACCOUNT,
    to: userEmail,
    subject: 'Welcome to Our Service!',
    html: `<h1>Welcome, ${userName}!</h1><p>Thank you for joining us. We are excited to have you!</p>`
  };

  try {
    // Send the email
    await transporter.sendMail(message);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Failed to send welcome email:', error.toString());
  }
};

module.exports = sendWelcomeEmail;
