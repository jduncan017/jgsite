import "./GalleryHeader.css";
import Image from "next/image";
import headerImage from "@/../public/headerImage.png";
import { inter, enriqueta } from "@/app/fonts";
import Link from "next/link";

const GalleryHeader = () => {
  return (
    <div className="gallery-header">
      <Image
        src={headerImage}
        className="gallery-header__image global__box-shadow"
        alt="wood tools decoration"
      />
      <div className="gallery-header__about global__box-shadow">
        <h2 className="gallery-header__title">ABOUT OUR GALLERY</h2>
        <p className={`gallery-header__description ${inter.className}`}>
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
            className={`gallery-header__button global__button ${enriqueta.className}`}
            type="button"
          >
            Custom Orders
          </button>
        </Link>
      </div>
      <Image
        src={headerImage}
        className="gallery-header__image global__box-shadow"
        alt="wood tools decoration"
      />
    </div>
  );
};

export default GalleryHeader;
