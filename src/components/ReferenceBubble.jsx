import React from "react";


const SpeechBubbleCard = ({ image, name, role, quote }) => {
  return (
    <div className="relative inline-block group">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-3 border-black"
      />

      <div className="absolute left-full top-1/2 ml-4 -translate-y-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none z-20">
        <div className="relative bg-gray-200 p-4 w-80 shadow-md rounded-sm">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="font-semibold">{role}</p>
          <p className="mt-2 text-sm text-gray-700">{quote}</p>

          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[20px] border-r-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default SpeechBubbleCard;