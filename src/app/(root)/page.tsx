"use client";
import HeroSection from "@/src/app/(root)/HeroSecton/HeroSection";
import TextBox from "@/src/app/(root)/TextBox/TextBox";
import Shop from "@/src/app/components/Shop/Shop";
import "./page.css";
import CallToActionSection from "@/src/app/(root)/CallToActionSection/CallToActionSection";
import TitleBanner from "../components/ShopBanner/TitleBanner";

export default function Home() {
  return (
    <>
      <main className="main global__page-background">
        <HeroSection></HeroSection>
        <div className="main__container">
          <TextBox></TextBox>
          <div className="home__call-to-action-section">
            <CallToActionSection></CallToActionSection>
          </div>
          <TitleBanner title={"WOODSHOP GALLERY"} />
          <Shop isHomePage={true} limit={8}></Shop>
        </div>
      </main>
    </>
  );
}
