"use client";
import "./ContactForm.css";
import { cardo } from "@/src/app/ui/fonts";
import { useContext, FormEvent, useState } from "react";
import Image from "next/image";
import { SelectedItemContext } from "@/src/contexts/selectedItemContext";
import useFormAndValidation from "@/src/hooks/useFormAndValidation";

const ContactForm = () => {
  const basePath = "/database-images/ImageGallery";
  const [submitted, setSubmitted] = useState(false);

  const { selectedItem } = useContext(SelectedItemContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation({
      subject: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid) {
      const formData = {
        ...values,
        selectedItem: selectedItem?.title,
      };
      console.log(formData);
      setSubmitted(true);
      resetForm();

      return;
    }
    console.log("Form is not valid");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__top-section-wrapper">
        <div
          className={
            selectedItem.imagePaths[0]
              ? "contact-form__inputs-wrapper"
              : "contact-form__inputs-wrapper contact-form__inputs-wrapper_full-width"
          }
        >
          <div className="first__column">
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
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="inquiry">General Inquiry</option>
              <option value="purchase">Purchase</option>
              <option value="custom_order">Custom / Bulk Order</option>
              <option value="other">Other</option>
            </select>

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
            />
            <span className="contact-form__error" id="name-error">
              {errors.name || ""}
            </span>
          </div>

          <div className={selectedItem.imagePaths[0] ? "" : "second__column"}>
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
            />
            <span className="contact-form__error" id="phone-error">
              {errors.phone || ""}
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
            />
          </div>
          <span className="contact-form__error" id="email-error">
            {errors.email || ""}
          </span>
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
          <span className="contact-form__error" id="message-error">
            {errors.message || ""}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          required
          className={`contact-form__message ${cardo.className}`}
        ></textarea>
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
          isValid
            ? "contact-form__submit global__button"
            : "contact-form__submit contact-form__submit_disabled global__button"
        }
        // disabled={!isValid}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
