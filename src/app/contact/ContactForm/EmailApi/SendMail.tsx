const sendEmail = require("../../mailer");

export default async (req, res) => {
  const { to, subject, text } = req.body;

  const emailOptions = {
    from: "your-email@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  await sendEmail(emailOptions);

  res.status(200).json({ status: "Email sent!" });
};
