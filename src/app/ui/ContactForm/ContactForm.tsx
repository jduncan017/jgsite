"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import "./ContactForm.css";
import Image from "next/image";
import referenceImage from "@/public/guitar.jpg";
import { cardo } from "@/src/app/fonts";

interface FormDataInterface {
  subject: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataInterface>({
    subject: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Update event type to FormEvent for the form submit handler
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // POST request to your API route would go here
  };

  // Update event type to ChangeEvent for the input change handler
  // This handler will now work for both the input and select elements
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__top-section-wrapper">
        <div className="contact-form__inputs-wrapper">
          <label
            className={`contact-form__label ${cardo.className}`}
            htmlFor="subject"
          >
            Subject:
          </label>
          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-form__input"
          >
            <option value="inquiry">General Inquiry</option>
            <option value="purchase">Purchase</option>
            <option value="custom_order">Custom / Bulk Order</option>
          </select>

          {/* Name Input */}
          <label
            className={`contact-form__label ${cardo.className}`}
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`contact-form__input ${cardo.className}`}
            placeholder="Paul Bunyan"
          />

          {/* Phone Input */}
          <label
            className={`contact-form__label ${cardo.className}`}
            htmlFor="phone"
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`contact-form__input ${cardo.className}`}
            placeholder="(123) 456-7890"
          />

          {/* Email Input */}
          <label
            className={`contact-form__label ${cardo.className}`}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`contact-form__input ${cardo.className}`}
            placeholder="paulbunyan@lumberco.com"
          />
        </div>
        <div className="contact-form__image-container">
          <h3 className={`contact-form__label ${cardo.className}`}>Item:</h3>
          <Image
            className="contact-form__reference-image"
            src={referenceImage}
            alt="image of the item you're inquiring about"
            width={240}
            height={240}
          />
        </div>
      </div>

      <div className="contact-form__message-container">
        <label
          className={`contact-form__label ${cardo.className}`}
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className={`contact-form__message ${cardo.className}`}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="contact-form__submit global__button">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
