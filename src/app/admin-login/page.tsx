import React from "react";
import "./page.css";
import Image from "next/image";
import formAccent from "@/../public/form-accent.png";
import { cardo } from "../fonts";
import LoginForm from "../ui/loginForm/LoginForm";

const loginPage = () => {
  return (
    <div className="login-page__main global__page-borders">
      <div className="login-page__login">
        <div className="login-page__login-form">
          <h1 className={`login-page__title ${cardo.className}`}>
            ADMIN LOGIN
          </h1>
          <div className="form__wrapper">
            <LoginForm />
            <Image
              src={formAccent}
              alt="accent for login form"
              height={60}
              width={60}
              className="form__accent accent__top-left"
            ></Image>
            <Image
              src={formAccent}
              alt="accent for login form"
              height={60}
              width={60}
              className="form__accent accent__top-right"
            ></Image>
            <Image
              src={formAccent}
              alt="accent for login form"
              height={60}
              width={60}
              className="form__accent accent__bottom-left"
            ></Image>
            <Image
              src={formAccent}
              alt="accent for login form"
              height={60}
              width={60}
              className="form__accent accent__bottom-right"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
