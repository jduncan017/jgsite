"use client";
import HeroSection from "@/src/app/ui/HeroSecton/HeroSection";
import TextBox from "@/src/app/ui/TextBox/TextBox";
import Shop from "@/src/app/ui/Shop/Shop";
import "./page.css";
import CallToActionSection from "@/src/app/ui/CallToActionSection/CallToActionSection";
import TitleBanner from "./ui/ShopBanner/TitleBanner";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <main className="main global__page-borders global__page-background">
        <TextBox></TextBox>
        <div className="home__call-to-action-section">
          <CallToActionSection></CallToActionSection>
        </div>
        <TitleBanner />
        <Shop isHomePage={true} limit={8}></Shop>
      </main>
    </>
  );
}
