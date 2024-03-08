import css from './ImageCard.module.css';

const ImageCard = ({ item, showModal }) => {
  return (
    <div
      className={css.card}
      onClick={() => {
        showModal(item);
      }}
    >
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={css.image}
        loading="lazy"
        width="300"
      />
      <p className={css.tooltip}>{item.alt_description}</p>
    </div>
  );
};

export default ImageCard;
