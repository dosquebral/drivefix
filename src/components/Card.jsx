import React from "react";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="max-w-[350px] relative mb-20">
      <img src={image} alt={title} className="w-full" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white drop-shadow-md py-4 w-[80%] text-center">
        <div className="space-y-1 mb-4">
          <p className="text-xs font-chakra text-primary font-semibold">
            {subtitle}
          </p>
          <h3 className="text-md text-secondary font-bold">{title}</h3>
        </div>

        <div className="flex-center">
          <button className="w-10 h-10 rounded-full bg-primary flex-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
