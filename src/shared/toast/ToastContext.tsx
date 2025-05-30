import React, { createContext, useContext, useEffect, useState } from "react";
import Toast from "./Toast";

interface ToastContextType {
  showToast: boolean;
  openToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showToast, setShowToast] = useState(false);
  const openToast = () => {
    setShowToast(true);
  };
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, openToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  } else {
    return context;
  }
};

export default ToastProvider;
