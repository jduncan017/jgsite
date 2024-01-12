import React from "react";
import "./TitleBanner.css";
import { cardo } from "@/app/fonts";

const TitleBanner = () => {
  return (
    <div className={`title-banner global__box-shadow ${cardo.className}`}>
      WOODSHOP GALLERY
    </div>
  );
};

export default TitleBanner;
