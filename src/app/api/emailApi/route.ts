import sendEmail from "./Mailer";
import { NextResponse } from "next/server";
import {
  generateCustomerHtmlConfirmation,
  generateCustomerTextConfirmation,
  generateHtmlContent,
  generateTextContent,
} from "./emailTemplates";
import { SelectedItem } from "@/src/contexts/selectedItemContext";

export type EmailContents = {
  subject: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  selectedItem?: SelectedItem;
};

// This function sends an email to the site owner
async function sendEmailToOwner(formData: EmailContents): Promise<void> {
  const htmlContent = generateHtmlContent(formData);
  const textContent = generateTextContent(formData);

  await sendEmail({
    name: formData.name,
    fromEmail: "info@johngerardwoodwork.com",
    toEmail: "info+customer-intake@johngerardwoodwork.com",
    subject: formData.subject,
    text: textContent,
    html: htmlContent,
  });
}

// This function sends a confirmation email to the user
async function sendConfirmationEmailToUser(
  formData: EmailContents
): Promise<void> {
  const { email } = formData;
  const htmlConfirmationContent = generateCustomerHtmlConfirmation(formData);
  const textConfirmationContent = generateCustomerTextConfirmation(formData);
  await sendEmail({
    name: "Nick & Ryan",
    fromEmail: "info@johngerardwoodwork.com",
    toEmail: email,
    subject: "Your Inquiry with John Gerard Woodwork",
    text: textConfirmationContent,
    html: htmlConfirmationContent,
  });
}

export async function POST(request: Request) {
  //extract and format formData
  const data = (await request.json()) as EmailContents;
  try {
    await sendEmailToOwner(data);
    await sendConfirmationEmailToUser(data);

    return NextResponse.json(
      {
        message:
          "Thank you! We have received your email and should reply in the next few days!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
