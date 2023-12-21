import "./Shop.css";
import GalleryCard from "../GalleryCard/GalleryCard";

const Shop = ({}) => {
  return (
    <div className="shop">
      <div className="shop__title-banner">BROWSE OUR SHOP</div>
      <div className="shop__gallery">
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
      </div>
      <div className="shop__buttons">
        <button className="shop__button">VIEW CURRENT INVENTORY</button>
        <button className="shop__button">VIEW ENTIRE GALLERY</button>
      </div>
    </div>
  );
};

export default Shop;
