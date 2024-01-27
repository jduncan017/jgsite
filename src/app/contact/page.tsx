import React from "react";
import "./page.css";
import Image from "next/image";
import contactBorder from "@/public/contact/contact-border.png";
import formAccent from "@/public/shared/form-accent.png";
import { cardo } from "../components/fonts";
import ContactForm from "./ContactForm/ContactForm";

const contactPage = () => {
  return (
    <div className="contact-page__main global__page-background">
      <Image
        src={contactBorder}
        alt="border for contact page"
        width={138}
        height={868}
        className="contact__border-image"
        priority
      />
      <div className="contact-page__contact global__page-borders">
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
          <ContactForm />
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
      <Image
        src={contactBorder}
        alt="border for contact page"
        width={138}
        height={868}
        className="contact__border-image"
        priority
      />
    </div>
  );
};

export default contactPage;
