import { EmailContents } from "./route";

export function generateHtmlContent(formData: EmailContents) {
  const imageUrl = `https://www.johngerardwoodwork.com/database-images/ImageGallery/${formData.selectedItem?.imagePaths[0]}`;
  console.log(imageUrl);
  // Construct the mailto link with pre-filled subject and body
  const replyLink = `mailto:${formData.email}?subject=Reply to ${
    formData.name
  }'s Inquiry&body=Dear ${
    formData.name
  },%0A%0A[Your reply here]%0A%0A---Original Message---%0AName: ${
    formData.name
  }%0AEmail: ${formData.email}%0APhone: ${
    formData.phone
  }%0AMessage: ${formData.message.replace(/\n/g, "%0A")}`;

  return `
  <h2>New Inquiry from ${formData.name}</h2>
  <h3><a href="${replyLink}">Click here to reply</a></h3>
  <h3>Customer Info:</h3>
  <p style="margin-top: 0; margin-bottom: 10px;"><strong>Name:</strong> ${
    formData.name
  }</p>
  <p style="margin-top: 0; margin-bottom: 10px;"><strong>Email:</strong> ${
    formData.email
  }</p>
  <p style="margin-top: 0; margin-bottom: 10px;"><strong>Phone:</strong> ${
    formData.phone
  }</p>
  <p style="margin-top: 0; margin-bottom: 10px;"><strong>Message:</strong>${
    formData.message
  }</p>
  ${
    formData.selectedItem?.imagePaths[0]
      ? `<h2>Selected Item Details</h2>
         <p style="margin-top: 0; margin-bottom: 10px;"><strong>Title:</strong> ${
           formData.selectedItem.title
         }</p>
         <p style="margin-top: 0; margin-bottom: 10px;"><strong>Price:</strong> $${formData.selectedItem.price.toFixed(
           2
         )}</p>            
         <img src=${imageUrl} alt="${
          formData.selectedItem.title
        }" style="max-width:50%;height:auto;"/>`
      : ""
  }
`;
}

export function generateTextContent(formData: EmailContents) {
  console.log(`text: ${formData.selectedItem}`);
  return `
      New Inquiry from ${formData.name}
  
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
  
      ${
        formData.selectedItem?.imagePaths[0]
          ? `Selected Item Details
      Title: ${formData.selectedItem.title}
      Price: $${formData.selectedItem.price.toFixed(2)}
      Image URL: ${formData.selectedItem.imagePaths[0]}`
          : ""
      }
    `;
}

export function generateCustomerHtmlConfirmation(formData: EmailContents) {
  const imageUrl = `https://www.johngerardwoodwork.com/database-images/ImageGallery/${formData.selectedItem?.imagePaths[0]}`;

  return `
    <h2>Confirmation of Your Inquiry</h2>
    <h3>Dear ${formData.name},</h3>
    <p>Thank you for reaching out to us! We've received your inquiry and will be in touch shortly. Below is a summary of your submission for your records.</p>
    <h3>Your Submitted Info:</h3>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Message:</strong> ${formData.message}</p>
    ${
      formData.selectedItem?.imagePaths[0]
        ? `<h3>Details of the Item You're Interested In:</h3>
           <p><strong>Title:</strong> ${formData.selectedItem.title}</p>
           <p><strong>Price:</strong> $${formData.selectedItem.price.toFixed(
             2
           )}</p>            
           <img src=${imageUrl} alt="${
            formData.selectedItem.title
          }" style="max-width:50%;height:auto;"/>`
        : ""
    }
    <p>We appreciate your interest and look forward to assisting you further!</p>
    <p>Best Regards,<br>Nicholas John Pasquarella & Ryan Gerard Fly</p>
    `;
}

export function generateCustomerTextConfirmation(formData: EmailContents) {
  return `
        Confirmation of Your Inquiry
  
        Dear ${formData.name},
  
        Thank you for your inquiry. We have received your message and will contact you soon. Here's a summary of your submission:
  
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
  
        ${
          formData.selectedItem?.imagePaths[0]
            ? `Details of the Item You're Interested In:
        Title: ${formData.selectedItem.title}
        Price: $${formData.selectedItem.price.toFixed(2)}
        Image URL: ${formData.selectedItem.imagePaths[0]}`
            : ""
        }
  
        We value your interest and are excited to work with you.
  
        Best Regards,
        Nicholas John Pasquarella & Ryan Gerard Fly
      `;
}
