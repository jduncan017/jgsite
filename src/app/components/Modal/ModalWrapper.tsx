import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import closeButton from "@/public/shared/close-button-white.png";
import { useModal } from "@/src/contexts/ModalContext";
import Image from "next/image";
import "./ModalWrapper.css";
import useEscape from "@/src/hooks/useEscape";

interface ModalWrapperProps {
  children: ReactElement;
}

const ModalWrapper: FC<ModalWrapperProps> = ({ children }) => {
  const { hideModal } = useModal();
  useEscape(hideModal);

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="modal__backdrop" onClick={hideModal}>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        className="modal__content"
        onClick={handleModalContentClick}
      >
        <button
          className="modal__close-button"
          type="button"
          onClick={hideModal}
        >
          <Image
            src={closeButton}
            width={18}
            height={18}
            alt="modal close button"
          />
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default ModalWrapper;
