import React, { useState } from "react";
import Image from "next/image";
import closeButton from "@/public/shared/close-button-white.png";
import arrowPath from "@/public/pagination/arrow-white.svg";
import "./TipModal.css";
import { isDesktop } from "react-device-detect";

const TipModal: React.FunctionComponent = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const closeTipModal = () => {
    setFadeOut(true);
  };

  // Only render if it's a desktop
  if (!isDesktop) {
    return null;
  }

  return (
    <div className={`tip-modal ${fadeOut ? "tip-modal_fade-out" : ""}`}>
      <p className="tip-modal__text">
        Tip: <br />
        Use the arrow keys to navigate pages & in item popups.
      </p>
      <Image
        src={closeButton}
        className="tip-modal__close-button"
        width={20}
        height={20}
        alt="close button"
        onClick={closeTipModal}
        aria-label="close"
      />
      <div className="tip-modal__arrows-container">
        <Image
          src={arrowPath}
          className="tip-modal__arrow_left"
          width={20}
          height={20}
          alt="left arrow"
        />
        <Image
          src={arrowPath}
          className="tip-modal__arrow_right"
          width={20}
          height={20}
          alt="right arrow"
        />
      </div>
    </div>
  );
};

export default TipModal;
