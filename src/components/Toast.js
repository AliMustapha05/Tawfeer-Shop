
import React from "react";
import { useToast } from "../context/ToastContext";
import "../styles/Toast.css";

function Toast() {
  const { toast, hideToast } = useToast();

  if (!toast) {
    return null;
  }

  return (
    <div
      className={`toast-notification toast-${toast.type}`}
      role="status"
      aria-live="polite"
    >
      <span className="toast-symbol">
        {toast.type === "success" ? "✓" :
         toast.type === "error" ? "✕" : "ℹ"}
      </span>

      <span className="toast-message">
        {toast.message}
      </span>

      <button
        type="button"
        className="toast-close"
        onClick={hideToast}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
