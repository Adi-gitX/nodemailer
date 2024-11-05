// controllers/sendEmailController.js
const nodemailer = require('nodemailer');

const sendEmailController = async (req, res) => {
  const { to } = req.body;

  // Customize the subject and HTML content for the welcome email
  const subject = 'Welcome to Our Service!';
  const html = `
    <h1>Welcome!</h1>
    <p>Dear User,</p>
    <p>Thank you for joining us! We are thrilled to have you on board.</p>
    <p>If you have any questions, feel free to reach out to us.</p>
    <p>Best Regards,<br>Your Company Name</p>
  `;

  let config = {
    service: 'gmail',
    auth: {
      user: '<gmail-account>',
      pass: '<app-password>'
    }
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: '<gmail-account>',
    to: to,
    subject: subject,
    html: html
  };

  try {
    await transporter.sendMail(message);
    res.status(200).send('Welcome email sent successfully');
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

module.exports = sendEmailController;
