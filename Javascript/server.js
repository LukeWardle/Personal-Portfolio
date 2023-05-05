require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');




const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Construct email message
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'l.wardle@live.co.uk', // Replace with your email address
            pass: process.env.EMAIL_PASSWORD // Replace with your email password or app-specific password
        }
    });

    const mailOptions = {
        from: email,
        to: 'l.wardle@live.co.uk', // Replace with your email address
        subject: 'New form submission from your website',
        text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Email sent' });
        }
    });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});
