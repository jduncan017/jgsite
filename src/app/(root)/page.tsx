"use client";
import HeroSection from "@/src/app/(root)/HeroSecton/HeroSection";
import TextBox from "@/src/app/(root)/TextBox/TextBox";
import Shop from "@/src/app/components/Shop/Shop";
import "./page.css";
import CallToActionSection from "@/src/app/(root)/CallToActionSection/CallToActionSection";
import TitleBanner from "../components/TitleBanner/TitleBanner";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <main className="main global__page-background">
        <HeroSection></HeroSection>
        <section className="main__container">
          <TextBox></TextBox>
          <CallToActionSection></CallToActionSection>
          <TitleBanner title={"WOODSHOP GALLERY"} />
          <Suspense fallback={<div>Loading...</div>}>
            <Shop isHomePage={true} limit={8}></Shop>
          </Suspense>
        </section>
      </main>
    </>
  );
}
