import "./GalleryHeader.css";
import Image from "next/image";
import headerImage from "@/public/woodshop/wood-tools-accent.webp";
import { inter, enriqueta } from "@/src/app/components/fonts";
import Link from "next/link";
import galleryAboutBackground from "@/public/woodshop/gallery-header-alternate.png";
import pageTexts from "@/src/lib/textContent";

const GalleryHeader = () => {
  return (
    <div className="gallery-header">
      <Image
        src={headerImage}
        className="gallery-header__image global__box-shadow global__border-radius"
        alt="wood tools decoration"
        placeholder="blur"
        width={236}
        height={550}
      />
      <div className="gallery-header__about global__box-shadow global__border-radius">
        <h2 className="gallery-header__title global__z-index-adjust global__text-shadow">
          ABOUT OUR GALLERY
        </h2>
        <p
          className={`gallery-header__description global__z-index-adjust global__text-shadow ${inter.className}`}
        >
          {pageTexts.galleryAbout}
        </p>
        <Link href={"/contact"}>
          <button
            className={`gallery-header__button global__button global__z-index-adjust ${enriqueta.className}`}
            type="button"
          >
            Custom Orders
          </button>
        </Link>
        <Image
          src={galleryAboutBackground}
          alt="Background image for gallery about section"
          className="global__component-background global__border-radius"
          width={1050}
          height={687}
          placeholder="blur"
        />
      </div>
      <Image
        src={headerImage}
        className="gallery-header__image global__box-shadow global__border-radius"
        alt="wood tools decoration"
        placeholder="blur"
        width={236}
        height={550}
      />
    </div>
  );
};

export default GalleryHeader;
