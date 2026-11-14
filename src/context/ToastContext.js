import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
      id: Date.now()
    });
  };

  const hideToast = () => {
    setToast(null);
  };

  useEffect(() => {

    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);

  }, [toast]);

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        hideToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}