import "./loading.css";
import Image from "next/image";
import loadingAccent from "@/public/form-accent.png";
import backgroundImage from "@/public/background.jpg";
import companyLogo from "@/public/logo-black.svg";
import loadingBar from "@/public/cutting-table.png";
import buzzSaw from "@/public/buzz-saw.png";
import woodPlank from "@/public/wood-plank.png";
import { cardo } from "@/src/app/fonts";

export default function Loading() {
  return (
    <div className="loading__main">
      <div className="loading__wrapper">
        <h2 className={`loading__title ${cardo.className}`}>
          Loading Shop ...
        </h2>
        <div className="loading__container">
          <p className="loading__percent">50%</p>
          <Image
            src={loadingBar}
            alt="Loading Bar"
            className="loading__bar"
            width={627}
            height={150}
          />
          <Image
            src={buzzSaw}
            alt="Buzz saw"
            className="loading__buzzsaw"
            width={175}
            height={175}
          />
          <Image
            src={woodPlank}
            alt="Wood Plank"
            className="loading__wood-plank_front"
            width={400}
            height={20}
          />
          <Image
            src={woodPlank}
            alt="Wood Plank"
            className="loading__wood-plank_back"
            width={400}
            height={20}
          />
        </div>
        <Image
          src={companyLogo}
          alt="John Gerard Logo"
          className="loading__logo"
          width={314}
          height={100}
        />
        <Image
          src={loadingAccent}
          alt="accent for contact form"
          height={90}
          width={90}
          className="loading__accent accent__top-left"
        ></Image>
        <Image
          src={loadingAccent}
          alt="accent for contact loading"
          height={90}
          width={90}
          className="loading__accent accent__top-right"
        ></Image>
        <Image
          src={loadingAccent}
          alt="accent for contact loading"
          height={90}
          width={90}
          className="loading__accent accent__bottom-left"
        ></Image>
        <Image
          src={loadingAccent}
          alt="accent for contact loading"
          height={90}
          width={90}
          className="loading__accent accent__bottom-right"
        ></Image>
      </div>
      <Image
        src={backgroundImage}
        alt="Background image for the page"
        className="global__page-background"
        fill={true}
        placeholder="blur"
      />
    </div>
  );
}
