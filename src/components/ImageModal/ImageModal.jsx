import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({
  onOpen,
  onClose,
  style,
  modalImageUrl,
  modalImageAlt
}) {
  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={onClose}
      style={style}
      contentLabel="Modal image"
    >
      <img src={modalImageUrl} alt={modalImageAlt} />
    </Modal>
  );
}