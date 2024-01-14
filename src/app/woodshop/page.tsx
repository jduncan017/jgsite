import React from "react";
import "./page.css";
import GalleryHeader from "@/src/app/ui/GalleryHeader/GalleryHeader";
import Shop from "@/src/app/ui/Shop/Shop";
import TitleBanner from "../ui/TitleBanner/TitleBanner";
import { Suspense } from "react";
import { GalleryHeaderSkeleton } from "../ui/skeletons";
import backgroundImage from "@/public/background.jpg";
import Image from "next/image";

/* --------------------------------------- */
/*              Woodshop Page              */
/* --------------------------------------- */

export default function Woodshop() {
  return (
    <>
      <main className="woodshop__main global__page-borders">
        <TitleBanner />
        {/* <GalleryHeaderSkeleton /> */}
        <Suspense fallback={<GalleryHeaderSkeleton />}>
          <GalleryHeader></GalleryHeader>
        </Suspense>
        <Shop isHomePage={false}></Shop>
        <Image
          src={backgroundImage}
          alt="Background image for the page"
          className="global__page-background"
          fill={true}
          placeholder="blur"
        />
      </main>
    </>
  );
}
