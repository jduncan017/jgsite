import React from "react";
import "./page.css";
import Image from "next/image";
import formAccent from "@/public/shared/form-accent.png";
import { cardo } from "../components/fonts";
import LoginForm from "./loginForm/LoginForm";

const loginPage = () => {
  return (
    <div className="login-page__main global__page-background">
      <div className="login-page__login-form">
        <h1
          className={`login-page__title global__box-shadow ${cardo.className}`}
        >
          ADMIN LOGIN
        </h1>
        <div className="form__wrapper global__box-shadow">
          <LoginForm />
          <Image
            src={formAccent}
            alt="accent for login form"
            height={60}
            width={60}
            className="login-form__accent login-accent__top-left"
          ></Image>
          <Image
            src={formAccent}
            alt="accent for login form"
            height={60}
            width={60}
            className="login-form__accent login-accent__top-right"
          ></Image>
          <Image
            src={formAccent}
            alt="accent for login form"
            height={60}
            width={60}
            className="login-form__accent login-accent__bottom-left"
          ></Image>
          <Image
            src={formAccent}
            alt="accent for login form"
            height={60}
            width={60}
            className="login-form__accent login-accent__bottom-right"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
