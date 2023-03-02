import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const user = process.env.GMAIL_USER;
const pass = process.env.PASSWORD;

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user,
      pass,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: user,
    subject: `${req.body.subject} | ${req.body.name}`,
    text: req.body.message,
    html: `<h3>${req.body.subject}</h3><p>${req.body.message}</p><p>${req.body.name}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).json({ message: "Successful" });
}
