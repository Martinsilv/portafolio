import React from "react";

const ActionButton = ({ icon, label, color = "bg-yellow-300" }) => {
  return (
    <div className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center cursor-pointer">
      {/* Círculo con ícono */}
      <div
        className={`flex justify-center items-center w-14 h-14 rounded-full ${color} transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top`}
      >
        {icon}
      </div>

      {/* Texto dinámico */}
      <div className="absolute font-semibold -bottom-10 left-1/2 text-sm text-center text-white whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
        {label}
      </div>
    </div>
  );
};

export default ActionButton;
