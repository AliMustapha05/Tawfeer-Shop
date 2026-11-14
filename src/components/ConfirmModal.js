
import React, { useEffect } from "react";
import "../styles/ConfirmModal.css";

function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "OK",
  type = "normal"
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirm-overlay">
      <div
        className="confirm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
      >
        <div className={`confirm-icon confirm-${type}`}>
          {type === "danger" ? "!" : "?"}
        </div>

        <h2 id="confirm-title">{title}</h2>

        <p id="confirm-message">{message}</p>

        <div className="confirm-actions">
          <button
            type="button"
            className="confirm-cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className={`confirm-ok-btn ${
              type === "danger" ? "confirm-danger-btn" : ""
            }`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
