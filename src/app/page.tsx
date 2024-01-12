import HomePageBanner from "@/app/ui/ImageBanner/ImageBanner";
import TextBox from "@/app/ui/TextBox/TextBox";
import Shop from "@/app/ui/Shop/Shop";
import "./page.css";
import CallToActionSection from "@/app/ui/CallToActionSection/CallToActionSection";
import TitleBanner from "./ui/TitleBanner/titleBanner";

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
