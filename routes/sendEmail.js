var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'mail.jjrsoftware.com', // e.g., 'smtp.example.com'
    port: 465, // SMTP port (typically 587 for TLS, 465 for SSL)
    secure: true, // Set to true if you're using SSL
    auth: {
      user: '', // Your custom domain email
      pass: '', // Your custom domain email password or app password
    },
  });

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    const { to, subject, text } = req.body;
    const mailOptions = {
      from: 'info@jjrsoftware.com', // Sender email
      to,
      subject,
      text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
});

module.exports = router;
