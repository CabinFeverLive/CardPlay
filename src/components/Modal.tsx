import { useEffect } from "react";

export default function Modal({ isOpen, onClose, cardIndex }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div className="modal">
        <h2 id="modalTitle">Card {cardIndex + 1} has been swiped off!</h2>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close Modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}
