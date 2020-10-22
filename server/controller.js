const transporter = require('./nodemailer.js').transporter;

module.exports = {
  sendEmail: (req, res) => {
    console.log(req.body.message);
    let mailOptions = {
      from: process.env.PERSONAL_EMAIL, // sender address
      to: req.query.email, // list of receivers
      subject: req.body.subject, // Subject line
      text: JSON.stringify(req.body.message), // plain text body
      html: '<p>' + JSON.stringify(req.body.message) + '</p>', // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        res.status(200).send('Email sent.');
      }
    });
  },
};
