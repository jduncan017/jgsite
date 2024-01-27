"use client";
import "./ContactForm.css";
import { cardo } from "@/src/app/components/fonts";
import { useContext } from "react";
import Image from "next/image";
import { SelectedItemContext } from "@/src/contexts/selectedItemContext";
import {
  useFormAndValidation,
  FormValues,
} from "@/src/hooks/useFormAndValidation";

const initialFields = {
  subject: "",
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const basePath = "/database-images/ImageGallery";

  const submitCallback = (formData: FormValues) => {
    console.log("Form data:", formData);
    //! Replace with API logic
  };

  const { selectedItem } = useContext(SelectedItemContext);
  const {
    values,
    handleChange,
    errors,
    isValid,
    handleSubmit,
    submitted,
    showError,
  } = useFormAndValidation(initialFields, submitCallback);

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__top-section-wrapper">
        <div
          className={
            selectedItem.imagePaths[0]
              ? "contact-form__inputs-wrapper"
              : "contact-form__inputs-wrapper contact-form__inputs-wrapper_full-width"
          }
        >
          <div className="inputs__column first__column">
            <label
              className={`contact-form__label ${cardo.className}`}
              htmlFor="subject"
            >
              Subject:*
            </label>
            <select
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              className="contact-form__input"
              required
              aria-describedby="subject-error"
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="inquiry">General Inquiry</option>
              <option value="purchase">Purchase</option>
              <option value="custom_order">Custom / Bulk Order</option>
              <option value="other">Other</option>
            </select>
            <span className="contact-form__error" id="subject-error">
              {showError ? errors.subject || "" : ""}
            </span>

            {/* Name Input */}
            <label
              className={`contact-form__label ${cardo.className}`}
              htmlFor="name"
            >
              Name:*
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
              className={`contact-form__input ${cardo.className}`}
              placeholder="Paul Bunyan"
              aria-describedby="name-error"
            />
            <span className="contact-form__error" id="name-error">
              {showError ? errors.name || "" : ""}
            </span>
          </div>

          <div
            className={
              selectedItem.imagePaths[0] ? "" : "inputs__column second__column"
            }
          >
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
              value={values.phone}
              onChange={handleChange}
              required
              className={`contact-form__input ${cardo.className}`}
              placeholder="(123) 456-7890"
              aria-describedby="phone-error"
            />
            <span className="contact-form__error" id="phone-error">
              {showError ? errors.phone || "" : ""}
            </span>

            {/* Email Input */}
            <div className="contact-form__error-label-container">
              <label
                className={`contact-form__label ${cardo.className}`}
                htmlFor="email"
              >
                Email:*
              </label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              className={`contact-form__input contact-form__input_email ${cardo.className}`}
              placeholder="paulbunyan@lumberco.com"
              aria-describedby="email-error"
            />
            <span className="contact-form__error" id="email-error">
              {showError ? errors.email || "" : ""}
            </span>
          </div>
        </div>
        {selectedItem.imagePaths[0] && (
          <div className="contact-form__image-container">
            <h3
              className={`contact-form__label ${cardo.className}`}
            >{`Item: ${selectedItem.title}`}</h3>
            <Image
              className="contact-form__reference-image"
              src={`${basePath}${selectedItem.imagePaths[0]}`}
              alt="image of the item you're inquiring about"
              width={500}
              height={500}
              quality={100}
            />
          </div>
        )}
      </div>

      <div className={`contact-form__message-container ${cardo.className}`}>
        <div className="contact-form__error-label-container">
          <label
            className={`contact-form__label ${cardo.className}`}
            htmlFor="message"
          >
            Message:*
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          required
          className={`contact-form__message ${cardo.className}`}
          aria-describedby="message-error"
        ></textarea>
        <span className="contact-form__error" id="message-error">
          {showError ? errors.message || "" : ""}
        </span>
        {submitted && (
          <span className="contact-form__submit-message">
            Thank you! We have received your email and should reply in the next
            few days!
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={
          isValid && !submitted
            ? "contact-form__submit global__button"
            : "contact-form__submit contact-form__submit_disabled global__button"
        }
        disabled={submitted}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
