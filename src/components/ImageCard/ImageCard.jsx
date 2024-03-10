import css from './ImageCard.module.css';

const ImageCard = ({
  image: { urlSmall, alt, description, urlRegular, likes, user },
  showModal,
}) => {
  return (
    <div
      className={css.card}
      onClick={() => {
        showModal({
          alt,
          description,
          urlRegular,
          likes,
          user,
        });
      }}
    >
      <img
        src={urlSmall}
        alt={alt}
        className={css.image}
        loading="lazy"
        width="300"
      />
      <p className={css.tooltip}>{description || alt}</p>
    </div>
  );
};

export default ImageCard;
