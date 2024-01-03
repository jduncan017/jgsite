import React from "react";
import "./page.css";
import GalleryHeader from "@/app/ui/GalleryHeader/GalleryHeader";
import Shop from "@/app/ui/Shop/Shop";

/* --------------------------------------- */
/*              Woodshop Page              */
/* --------------------------------------- */

export default function Woodshop() {
  return (
    <>
      <main className="woodshop__main global__page-borders">
        <GalleryHeader></GalleryHeader>
        <Shop displayButtons={false}></Shop>
      </main>
    </>
  );
}
