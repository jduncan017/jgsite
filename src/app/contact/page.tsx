import React from "react";
import "./page.css";
import Image from "next/image";
import contactBorder from "@/../public/contact-border.png";
import contactAccent from "@/../public/contact-form-accent.svg";
import accentPen from "@/../public/contact-accent-pen.png";
import { cardo } from "../fonts";
import ContactForm from "../ui/ContactForm/ContactForm";

const contactPage = () => {
  return (
    <div className="contact-page__main global__page-borders">
      <Image
        src={contactBorder}
        alt="border for contact page"
        width={138}
        height={868}
        className="contact__border-image"
      />
      <div className="contact-page__contact global__page-borders">
        <h1 className={`contact-page__title ${cardo.className}`}>CONTACT</h1>
        <div className="form__wrapper">
          <h2 className={`form__title ${cardo.className}`}>
            SEND US A MESSAGE:
          </h2>
          <p className="form__description">
            Have a question? Looking to buy one of our pieces or need a custom /
            bulk order? Reach out below!
          </p>
          <ContactForm />
          <Image
            src={contactAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__top-left"
          ></Image>
          <Image
            src={contactAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__top-right"
          ></Image>
          <Image
            src={contactAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__bottom-left"
          ></Image>
          <Image
            src={contactAccent}
            alt="accent for contact form"
            height={90}
            width={90}
            className="form__accent accent__bottom-right"
          ></Image>
          <Image
            src={accentPen}
            alt="decorative pen"
            width={333}
            height={205}
            className="form__accent-pen"
          />
        </div>
      </div>

      <Image
        src={contactBorder}
        alt="border for contact page"
        width={138}
        height={868}
        className="contact__border-image"
      />
    </div>
  );
};

export default contactPage;
