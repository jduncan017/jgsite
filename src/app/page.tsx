import HomePageBanner from "@/components/Banner/HomePageBanner";
import TextBox from "@/components/TextBox/TextBox";
import Shop from "@/components/Shop/Shop";
import "./page.css";

export default function Home() {
  return (
    <>
      <HomePageBanner></HomePageBanner>
      <main className={"main"}>
        <TextBox></TextBox>
        <Shop></Shop>
      </main>
    </>
  );
}
