// /api/contact.js
'use client'
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      //   user: process.env.MAILTRAP_USER,
      user: "carlaheywood24@gmail.com",
      //   pass: process.env.MAILTRAP_PASS,
      pass: "cqfswhzwmhlwrkbh",
    },
  });

  const mailData = {
    from: email,
    to: "carlaheywood24@gmail.com", // Replace this with your own email
    subject: `Message from ${name}`,
    text: message,
    html: `<div>${message}</div>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Error occurred while trying to send email" });
      return;
    }
    res.status(200).send({ message: "Email successfully sent" });
  });

};