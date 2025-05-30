import React from "react";
import { useToast } from "./ToastContext";

const Toast: React.FC = () => {
  const { showToast } = useToast();
  if (!showToast) return null;

  return (
    <div
      id="toast-top-left"
      className={`fixed flex items-center w-full max-w-xs p-4 space-x-4 
      text-[#1f2735] bg-[#bdc8e7] divide-x rtl:divide-x-reverse divide-gray-200 
      rounded-lg shadow-sm bottom-[20%] right-5 dark:text-gray-400 
      dark:divide-gray-700 dark:bg-gray-800
      transition-opacity duration-500 ease-out
      opacity-0 translate-y-4 z-[5000000]
      ${showToast ? "opacity-100 translate-y-0" : ""}
    `}
      role="alert"
    >
      <div className="text-lg font-normal">
        Thanks! If your email address is valid, you’ll receive a confirmation
        email soon.
      </div>
    </div>
  );
};

export default Toast;
