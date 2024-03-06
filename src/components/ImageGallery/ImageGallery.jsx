import css from './ImageGallery.module.css';

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

// ;
export default ImageGallery;
