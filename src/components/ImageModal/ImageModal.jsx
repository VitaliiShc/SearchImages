import css from "./ImageModal.module.css";

import Modal from "react-modal";
Modal.setAppElement("#root");
import { IoClose } from "react-icons/io5";

const ImageModal = ({ isModalOpen, hideModal, selectedImg }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={hideModal}
      overlayClassName={css.overlay}
      className={css.modal}
      contentLabel="Image Modal"
    >
      {selectedImg && (
        <div className={css.modalContainer}>
          <button className={css.modalCloseBtn} onClick={hideModal}>
            <IoClose size={24} className={css.closeIcon} />
          </button>
          <img
            className={css.image}
            src={selectedImg.srcRegular}
            alt={selectedImg.alt}
          />
          <div className={css.imgInfo}>
            <p className={css.imgDescription}>
              {selectedImg.description || selectedImg.alt}
            </p>
            <div className={css.userInfo}>
              <p>{selectedImg.likes} likes</p>
              <p>
                User:{" "}
                <a href={selectedImg.urlUserPage} target="_blank">
                  {selectedImg.user}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
