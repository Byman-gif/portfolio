import React, { useState } from "react";

const SpeechBubbleCard = ({ image, name, role, quote }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block group cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-3 border-black"
      />

      <div
        className={`
          absolute z-20 opacity-0 scale-95 transition-all duration-300 pointer-events-none
          left-1/2 top-full mt-4 -translate-x-1/2

          sm:left-full sm:top-1/2 sm:mt-0 sm:ml-4 sm:-translate-x-0 sm:-translate-y-1/2

          group-hover:opacity-100 group-hover:scale-100
          ${isOpen ? "opacity-100 scale-100" : ""}
        `}
      >
        <div className="relative bg-gray-200 p-4 w-80 shadow-md rounded-sm">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="font-semibold">{role}</p>
          <p className="mt-2 text-sm text-gray-700">{quote}</p>

          {/* Nuoli puhelimella ylöspäin */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[20px] border-b-gray-200 sm:hidden" />

          {/* Nuoli isolla näytöllä vasemmalle */}
          <div className="hidden sm:block absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[20px] border-r-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default SpeechBubbleCard;