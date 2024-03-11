import css from './ImageCard.module.css';

const ImageCard = ({
  image: { srcSmall, alt, description, srcRegular, likes, user, urlUserPage },
  showModal,
}) => {
  return (
    <div
      className={css.card}
      onClick={() => {
        showModal({
          alt,
          description,
          srcRegular,
          likes,
          user,
          urlUserPage,
        });
      }}
    >
      <img
        src={srcSmall}
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
