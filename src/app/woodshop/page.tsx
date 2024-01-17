import React from "react";
import "./page.css";
import GalleryHeader from "@/src/app/woodshop/GalleryHeader/GalleryHeader";
import Shop from "@/src/app/ui/Shop/Shop";
import TitleBanner from "../ui/ShopBanner/ShopBanner";

/* --------------------------------------- */
/*              Woodshop Page              */
/* --------------------------------------- */

export default function Woodshop() {
  return (
    <>
      <main className="woodshop__main global__page-borders global__page-background">
        <TitleBanner />
        <GalleryHeader></GalleryHeader>
        <Shop isHomePage={false}></Shop>
      </main>
    </>
  );
}
