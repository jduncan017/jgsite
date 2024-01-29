import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: `"Your Name" <${process.env.ZOHO_EMAIL}>`,
      ...options,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
