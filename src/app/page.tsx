import HomePageBanner from "@/components/Banner/HomePageBanner";
import TextBox from "@/components/TextBox/TextBox";
import Shop from "@/components/Shop/Shop";
import "./page.css";
import { Inter, Enriqueta } from "next/font/google";
import CallToActionSection from "@/components/CallToActionSection/CallToActionSection";

const enriqueta = Enriqueta({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePageBanner></HomePageBanner>
      <main className={`main ${enriqueta.className}`}>
        <TextBox></TextBox>
        <div className="home__call-to-action-section">
          <CallToActionSection></CallToActionSection>
        </div>
        <Shop></Shop>
      </main>
    </>
  );
}
