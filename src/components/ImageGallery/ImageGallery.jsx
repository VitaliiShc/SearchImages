import css from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ items, showModal }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} showModal={showModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
