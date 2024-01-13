import "./Shop.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import { enriqueta } from "@/src/app/fonts";
import imageCards from "@/src/app/lib/constants";
import Link from "next/link";

type ShopProps = {
  isHomePage: boolean;
  limit?: number;
};

const Shop: React.FC<ShopProps> = ({ isHomePage, limit }) => {
  const basePath = "/ImageGallery";
  const cardsToDisplay = limit ? imageCards.slice(0, limit) : imageCards;

  return (
    <div className="shop">
      <div
        className={
          isHomePage ? "shop__gallery shop__gallery-homepage" : "shop__gallery"
        }
      >
        {cardsToDisplay.map((card, index) => (
          <GalleryCard
            key={index}
            title={card.title}
            price={card.price}
            imagePath={`${basePath}${card.imagePaths[0]}`}
          />
        ))}
      </div>
      <div className={isHomePage ? "shop__buttons" : "shop__buttons_hidden"}>
        <Link href="/woodshop" className="hidden__button-container">
          <button
            className={`shop__button global__button global__box-shadow ${enriqueta.className}`}
          >
            VIEW CURRENT INVENTORY
          </button>
        </Link>
        <Link href="/woodshop" className="hidden__button-container">
          <button
            className={`shop__button global__button global__box-shadow ${enriqueta.className}`}
          >
            VIEW ENTIRE GALLERY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
