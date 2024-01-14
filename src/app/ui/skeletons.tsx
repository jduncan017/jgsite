import "./skeletons.css";

export function GalleryHeaderSkeleton() {
  return (
    <div className="gallery-header_skeleton">
      <div className="gallery-header__image_skeleton" />
      <div className="gallery-header__about_skeleton">
        <h2 className="gallery-header__title">ABOUT OUR GALLERY</h2>
        <p className="gallery-header__description">
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
      </div>
      <div className="gallery-header__image_skeleton" />
    </div>
  );
}
