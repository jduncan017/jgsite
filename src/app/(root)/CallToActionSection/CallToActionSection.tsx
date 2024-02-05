import React from "react";
import "./CallToActionSection.css";
import ImageCard from "../ImageCard/ImageCard";
import { CALL_TO_ACTION_CARDS } from "@/src/lib/constants";

const CallToActionSection = () => {
  const BASE_PATH = "/database-images/CallToActionCards";

  return (
    <section className="section">
      {CALL_TO_ACTION_CARDS.map((card, index) => (
        <ImageCard
          key={index}
          title={card.title}
          imagePath={`${BASE_PATH}${card.imagePath}`}
          link={card.link}
        />
      ))}
    </section>
  );
};

export default CallToActionSection;
