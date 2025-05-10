import React from "react";
import { SlArrowRight } from "react-icons/sl";


const EarnCard = ({img, price , title}) => {
  return (
    <div className="w-full max-w-xl h-[70vh] bg-[#111828] border border-gray-700 p-4 overflow-hidden">
      <img
        src={img}
        alt="computer"
        className=" px-14 mt-10 border-b border-gray-700"
      />
      <div className="flex flex-col gap-2 p-4 mt-10">
        <span className="text-sm text-gray-400">{price}</span>
        <p className="text-xl font-semibold">{title}</p>
        <button className="mt-10 btn-color flex justify-between text-white text-sm text-start font-bold py-4 px-3 ">
          BUY NOW <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default EarnCard;
