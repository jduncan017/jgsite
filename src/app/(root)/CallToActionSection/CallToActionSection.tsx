import React from "react";
import "./CallToActionSection.css";
import ImageCard from "../ImageCard/ImageCard";
import { callToActionCards } from "@/src/lib/constants";

const CallToActionSection = () => {
  const basePath = "/database-images/CallToActionCards";

  return (
    <div className="section">
      {callToActionCards.map((card, index) => (
        <ImageCard
          key={index}
          title={card.title}
          imagePath={`${basePath}${card.imagePath}`}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CallToActionSection;
