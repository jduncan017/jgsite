import React from "react";
import "./page.css";
import GalleryHeader from "@/app/ui/GalleryHeader/GalleryHeader";
import Shop from "@/app/ui/Shop/Shop";
import TitleBanner from "../ui/TitleBanner/titleBanner";

/* --------------------------------------- */
/*              Woodshop Page              */
/* --------------------------------------- */

export default function Woodshop() {
  return (
    <>
      <main className="woodshop__main global__page-borders">
        <TitleBanner />
        <GalleryHeader></GalleryHeader>
        <Shop isHomePage={false}></Shop>
      </main>
    </>
  );
}
