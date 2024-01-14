"use client";

import HomePageBanner from "@/src/app/ui/ImageBanner/ImageBanner";
import TextBox from "@/src/app/ui/TextBox/TextBox";
import Shop from "@/src/app/ui/Shop/Shop";
import "./page.css";
import CallToActionSection from "@/src/app/ui/CallToActionSection/CallToActionSection";
import TitleBanner from "./ui/TitleBanner/TitleBanner";
import Image from "next/image";
import backgroundImage from "@/public/background.jpg";
import ItemModal from "./ui/ItemModal/ItemModal";
import { useState, useContext } from "react";
import {
  SelectedItemContext,
  SelectedItem,
  setNoSelectedItem,
} from "../contexts/selectedItemContext";

export default function Home() {
  // --------------------------------------- //
  //             - Declarations              //
  // --------------------------------------- //
  const [modalOpened, setModalOpened] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);

  const tempItem = {
    title: "Fender Style Guitar",
    price: 1299.0,
    imagePaths: [
      "/nick-guitar-1.jpg",
      "/nick-guitar-2.jpg",
      "/nick-guitar-3.jpg",
      "/nick-guitar-4.jpg",
    ],
    description:
      "Exquisite Fender-style guitar, offering both a classic design and superior sound quality.",
    quantity: 0,
    category: "guitar",
  };

  // --------------------------------------- //
  //         - Function Declarations -       //
  // --------------------------------------- //

  function toggleModal(item?: SelectedItem) {
    if (modalOpened) {
      setModalOpened(false);
      setSelectedItem(setNoSelectedItem());
    } else if (item) {
      const updatedItem = {
        ...item,
        displayImagePath: item.imagePaths[0] || "default-image-path.jpg",
      };
      setSelectedItem(updatedItem);
      setModalOpened(true);
    }
  }

  return (
    <>
      <HomePageBanner></HomePageBanner>
      <main className="main global__page-borders test__background">
        <TextBox></TextBox>
        <div className="home__call-to-action-section">
          <CallToActionSection></CallToActionSection>
        </div>
        <TitleBanner />
        <Shop isHomePage={true} limit={8} onClick={toggleModal}></Shop>
        <Image
          src={backgroundImage}
          alt="Background image for the page"
          className="global__page-background"
          fill={true}
          placeholder="blur"
        />
      </main>
      {modalOpened === true && (
        <ItemModal onClose={toggleModal} selectedItem={selectedItem} />
      )}
    </>
  );
}
