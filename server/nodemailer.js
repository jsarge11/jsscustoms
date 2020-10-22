const nodemailer = require('nodemailer');
require('dotenv').config();

const { PERSONAL_EMAIL, PERSONAL_PASSWORD } = process.env;
let transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Office 365 server
  port: 587, // secure SMTP
  auth: {
    user: PERSONAL_EMAIL,
    pass: PERSONAL_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to take messages');
  }
});
module.exports = {
  transporter,
};
