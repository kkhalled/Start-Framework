import "./CardModal.css";

export default function CardModal({ img, onClose }) {
  if (!img) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <img
        src={img}
        alt="modal-img"
        className="modal-img"
        onClick={(e) => e.stopPropagation()}  // image won't close modal
      />
    </div>
  );
}
