import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const AlertPopup = ({ message, type, onClose }) => {
  // Determine styles and button text based on the type of alert
  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-green-500" : "bg-red-500";
  const Icon = isSuccess ? CheckIcon : XMarkIcon;
  const iconBgColor = isSuccess ? "bg-green-100" : "bg-red-100";
  const iconColor = isSuccess ? "text-green-600" : "text-red-600";
  const buttonText = isSuccess ? "Superb!" : "Try Again";

  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* Icon */}
      <div
        className={`flex items-center justify-center ${iconBgColor} rounded-full w-16 h-16 mb-4`}
      >
        <Icon className={`w-8 h-8 ${iconColor} `} strokeWidth="5" />{" "}
        {/* Heroicons with Tailwind size */}
      </div>

      {/* Message */}
      <h2 className="font-bold text-lg mb-2">
        {isSuccess ? "Success" : "Error"}
      </h2>
      <p className="text-gray-700 mb-6">{message}</p>

      {/* Button */}
      <div class="flex justify-center items-center">
        <button
          onClick={onClose}
          class="px-5 py-3 rounded-md font-figtree border font-semibold text-[#ECF9FD] text-base bg-[#b4773e] transition-all"
        >
          Superb!
        </button>
      </div>
    </div>
  );
};

export default AlertPopup;
