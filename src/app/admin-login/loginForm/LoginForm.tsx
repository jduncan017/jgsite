"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import "./LoginForm.css";
import { cardo } from "../../components/fonts";

interface FormDataInterface {
  username: string;
  password: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataInterface>({
    username: "",
    password: "",
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
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Name Input */}
      <label className={`login-form__label ${cardo.className}`} htmlFor="name">
        Username:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.username}
        onChange={handleChange}
        required
        className="login-form__input"
      />

      {/* Password Input */}
      <label className={`login-form__label ${cardo.className}`} htmlFor="phone">
        Password:
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.password}
        onChange={handleChange}
        required
        className="login-form__input"
      />

      {/* Submit Button */}
      <button type="submit" className="login-form__submit global__button">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
