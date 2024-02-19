"use client";
import "./ContactForm.css";
import { useState } from "react";
import { cardo } from "@/src/app/fonts";
import { useContext } from "react";
import Image from "next/image";
import { SelectedItemContext } from "@/src/contexts/selectedItemContext";
import {
  useFormAndValidation,
  FormValues,
} from "@/src/hooks/useFormAndValidation";
import ModalWrapper from "../Modal/ModalWrapper";
import formAccent from "@/public/shared/form-accent.png";

//these are used to build the initial structure for FormValues
const initialFields = {
  subject: "",
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const BASE_PATH = "/database-images/ImageGallery";
  const [submitConfirm, setSubmitConfirm] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);

  function resetItem() {
    setSelectedItem(null);
  }

  const submitCallback = async (formData: FormValues) => {
    const emailData = { ...formData, selectedItem: selectedItem };
    try {
      setButtonDisabled(true);
      setButtonDisplay("Sending...");
      const response = await fetch("/api/emailApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitConfirm(data.message);
        setButtonDisplay("Sent!");
        resetItem();
      } else {
        console.error("Error:", response.status, response.statusText);
        setSubmitConfirm("Failed to send email. Please try again later.");
        setButtonDisabled(false);
        setButtonDisplay("Send");
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Request failed:", error);
      setButtonDisabled(false);
      setButtonDisplay("Send");
      setSubmitConfirm(
        "We're sorry, there was an error sending the email. Please try again later or send us one manually at info@johngerardwoodwork.com"
      );
      throw error;
    }
  };

  const { values, handleChange, errors, isValid, handleSubmit, showError } =
    useFormAndValidation(initialFields, submitCallback);

  return (
    <ModalWrapper>
      <div className="contact-modal">
        <h1
          className={`contact-page__title global__box-shadow ${cardo.className}`}
        >
          CONTACT
        </h1>
        <div className="form__wrapper global__box-shadow">
          <h2 className={`form__title ${cardo.className}`}>
            SEND US A MESSAGE:
          </h2>
          <p className="form__description">
            Have a question or looking to buy one of our pieces? Reach out
            below!
          </p>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__top-section-wrapper">
              <div
                className={
                  selectedItem
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
                    selectedItem ? "" : "inputs__column second__column"
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
              {selectedItem && (
                <div className="contact-form__image-container">
                  <div className="contact-form__image-title-container">
                    <button
                      className="contact-form__reference-image-delete"
                      type="button"
                      onClick={resetItem}
                    />
                    <h3
                      className={`contact-form__label ${cardo.className}`}
                    >{`Item: ${selectedItem.title}`}</h3>
                  </div>
                  <Image
                    className="contact-form__reference-image"
                    src={`${BASE_PATH}${selectedItem.imagePaths[0]}`}
                    alt="image of the item you're inquiring about"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </div>
              )}
            </div>

            <div
              className={`contact-form__message-container ${cardo.className}`}
            >
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
              {showError && (
                <span className="contact-form__error" id="message-error">
                  {errors.message}
                </span>
              )}
              <span className="contact-form__submit-message">
                {submitConfirm}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={
                isValid && !buttonDisabled
                  ? "contact-form__submit global__button"
                  : "contact-form__submit contact-form__submit_disabled global__button"
              }
              disabled={buttonDisabled}
            >
              {buttonDisplay}
            </button>
          </form>
          {/* Form Accents */}
          <Image
            src={formAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__top-left"
          ></Image>
          <Image
            src={formAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__top-right"
          ></Image>
          <Image
            src={formAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__bottom-left"
          ></Image>
          <Image
            src={formAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__bottom-right"
          ></Image>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ContactForm;
