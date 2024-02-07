import React, { Suspense } from "react";
import "./page.css";
import GalleryHeader from "@/src/app/woodshop/GalleryHeader/GalleryHeader";
import Shop from "@/src/app/components/Shop/Shop";
import TitleBanner from "../components/TitleBanner/TitleBanner";

/* --------------------------------------- */
/*              Woodshop Page              */
/* --------------------------------------- */

export default function Woodshop() {
  return (
    <>
      <main className="woodshop__main global__page-background">
        <TitleBanner title={"WOODSHOP GALLERY"} />
        <GalleryHeader></GalleryHeader>
        <Suspense>
          <Shop isHomePage={false}></Shop>
        </Suspense>
      </main>
    </>
  );
}
