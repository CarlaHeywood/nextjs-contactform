// pages/api/contact.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const handler = async (req, res) => {
  // DEBUG
  // res.status(200).json({ message: "Hello from contact.js!" });

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    // Send an email to the contact form submitter
    const mailDataToSubmitter = {
      from: email, // Your email
      to: email, // Submitter's email
      subject: `Confirmation | Message Received`,
      text: `Hello ${name}! we received your message. We'll be in touch soon.`,
      html: `
        <div>
          <p>Hello ${name},</p>
          <p>Your message was sent successfully. We'll be in touch soon.</p>
        </div>
        <hr>
        <br><br>
        <div>Message Receipt</div>
        <br><br>
        <div>
          NAME: <br>
          <strong>${name}</strong> 
          <br><br>
          EMAIL: <br>
          <strong>${email}</strong>
          <br><br>
          MESSAGE: <br>
          <strong>${message}</strong>
        </div>
      `,
    };

    // Send an email to yourself
    const mailDataToSelf = {
      from: email,
      to: email, // Replace this with your own email
      subject: `Contact Form | Message from ${name}`,
      text: message,
      html: `<div>
      NAME: <br>
      <strong>${name}</strong> 
      <br><br>
      EMAIL: <br>
      <strong>${email}</strong>
      <br><br>
      MESSAGE: <br>
      <strong>${message}</strong>
      </div>`,
    };

    try {
      await transporter.sendMail(mailDataToSubmitter);
      await transporter.sendMail(mailDataToSelf);
      res.status(200).json({ message: "Emails successfully sent" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error occurred while trying to send emails" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;