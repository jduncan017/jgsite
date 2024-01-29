import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "./Mailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, phone, email, subject, message } = req.body;

    try {
      await sendEmail({
        to: email,
        subject: subject,
        text: message,
        html: message,
        // attachments: [{ filename: 'image.png', path: '/path/to/image.png' }],
      });

      res.status(200).json({
        message:
          "Thank you! We have received your email and should reply in the next few days!",
      });
    } catch (error) {
      res.status(500).json({
        message: "Sorry we're experiencing an error. Please try again later",
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
