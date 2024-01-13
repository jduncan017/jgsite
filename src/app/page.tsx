import HomePageBanner from "@/src/app/ui/ImageBanner/ImageBanner";
import TextBox from "@/src/app/ui/TextBox/TextBox";
import Shop from "@/src/app/ui/Shop/Shop";
import "./page.css";
import CallToActionSection from "@/src/app/ui/CallToActionSection/CallToActionSection";
import TitleBanner from "./ui/TitleBanner/TitleBanner";

export default function Home() {
  return (
    <>
      <HomePageBanner></HomePageBanner>
      <main className="main">
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
