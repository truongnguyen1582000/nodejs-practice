const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  const content = `Hi Truong !`;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PWD,
    },
  });

  const mailOptions = {
    from: "aef95466@zwoho.com",
    to: "truongnguyen1582000@gmail.com",
    subject: "TEST nodemailer",
    text: "Hello BR",
    html: content,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json({ msg: "Email has been sent" });
  });
});

module.exports = router;
