import React, { useState } from "react";
import { XCircle } from "lucide-react";

interface AlertPopupProps {
  message: string;
}

const AlertPopup: React.FC<AlertPopupProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div
        className="fixed top-6 right-6 z-50 w-full max-w-sm bg-red-100 text-red-800 border border-red-300 px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 ease-in-out animate-fade-in"
      >
        <div className="flex items-start gap-3">
          <XCircle className="w-6 h-6 mt-1 text-red-500" />
          <div className="flex-1">{message}</div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-500 hover:text-red-700 font-bold"
            aria-label="Close alert"
          >
            ✕
          </button>
        </div>
      </div>
    )
  );
};

export default AlertPopup;
