// import type { NextApiRequest, NextApiResponse } from "next";
// import sendEmail from "./Mailer";

// // Define the structure for the expected request body
// interface EmailRequestBody {
//   to: string;
//   subject: string;
//   text: string;
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   // Destructure and type the request body
//   const { to, subject, text } = req.body as EmailRequestBody;

//   const emailOptions = {
//     from: "your-email@gmail.com",
//     to: to,
//     subject: subject,
//     text: text,
//   };

//   await sendEmail(emailOptions);

//   res.status(200).json({ status: "Email sent!" });
// };
