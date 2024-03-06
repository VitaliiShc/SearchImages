import css from './ImageCard.module.css';

const ImageCard = ({ item: { urls, description } }) => {
  return (
    <li className={css.card}>
      <img src={urls.small} alt={description} className={css.image} />
    </li>
  );
};

export default ImageCard;
