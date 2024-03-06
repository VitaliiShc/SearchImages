import css from './ImageCard.module.css';

const ImageCard = ({ item: { urls, description } }) => {
  return (
    <li>
      <div className={css.card}>
        <img
          src={urls.small}
          alt={description}
          className={css.image}
          loading="lazy"
          width="300"
        />
      </div>
    </li>
  );
};

export default ImageCard;
