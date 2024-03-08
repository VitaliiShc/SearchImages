import { IoClose } from 'react-icons/io5';

import Modal from 'react-modal';
Modal.setAppElement('#root');

import css from './ImageModal.module.css';

const ImageModal = ({ isModalOpen, hideModal, selectedImg }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={hideModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      overlayClassName={css.overlay}
      className={css.modal}
      contentLabel="Image Modal"
    >
      {selectedImg && (
        <div className={css.modalContainer}>
          <button className={css.modalCloseBtn} onClick={hideModal}>
            <IoClose size={24} className={css.closeIcon}/>
          </button>
          <img
            className={css.image}
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
          />
          <div className={css.imgInfo}>
            <p className={css.imgDescription}>
              {selectedImg.description || selectedImg.alt_description}
            </p>
            <div className={css.userInfo}>
              <p>{selectedImg.likes} likes</p>
              <p>User: {selectedImg.user.username}</p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
