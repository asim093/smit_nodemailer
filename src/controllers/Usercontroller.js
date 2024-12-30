import express, { response } from "express";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "lolita.simonis92@ethereal.email",
    pass: "1j1Dut56fFMFGBDxgB",
  },
});

export const sendmail = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      to: "asimusman8899@gmail.com",
      subject: "mubarak ho apka inaam nikla he",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
    res.send("email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
};
