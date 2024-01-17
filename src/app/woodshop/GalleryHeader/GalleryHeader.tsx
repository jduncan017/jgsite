import "./GalleryHeader.css";
import Image from "next/image";
import headerImage from "@/public/woodshop/wood-tools-accent.webp";
import { inter, enriqueta } from "@/src/app/ui/fonts";
import Link from "next/link";
import galleryAboutBackground from "@/public/woodshop/gallery-header-about-background.webp";

const GalleryHeader = () => {
  return (
    <div className="gallery-header">
      <Image
        src={headerImage}
        className="gallery-header__image global__box-shadow"
        alt="wood tools decoration"
        placeholder="blur"
        width={236}
        height={550}
      />
      <div className="gallery-header__about global__box-shadow">
        <h2 className="gallery-header__title global__z-index-adjust">
          ABOUT OUR GALLERY
        </h2>
        <p
          className={`gallery-header__description global__z-index-adjust ${inter.className}`}
        >
          Everything we make is a unique piece that was carefully crafted in our
          shop. Listed items may or may not be readily available, but we can
          always recreate project or customize them to your needs.
          <br />
          <br />
          Please contact us if you’re interested in any of pieces. If you’d like
          a bulk order or want something custom please contact us via our custom
          orders page.
          <br />
          <br />
          Build times on custom or out of stock items vary based on our current
          workload.
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
          className="global__component-background"
          width={1050}
          height={687}
          placeholder="blur"
        />
      </div>
      <Image
        src={headerImage}
        className="gallery-header__image global__box-shadow"
        alt="wood tools decoration"
        placeholder="blur"
        width={236}
        height={550}
      />
    </div>
  );
};

export default GalleryHeader;
