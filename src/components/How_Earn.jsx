import React from "react";

import { SlArrowRight } from "react-icons/sl";
import EarnCard from "./EarnCard";
import { earnCardData } from "../utils/constant";

const How_Earn = () => {
  return (
    <div className="max-w-7xl mx-auto bg-color text-white py-20 px-4">
      <div className="flex justify-between">
        <div className="border-l-4 border-[#2eb4e0] pl-4 text-md mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-color">
            How to Earn?
          </h1>
        </div>
        <h2 className="text-center  text-2sm font-semibold mt-5">
          It comes down to your PC’s Processing power and luck
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {/* Card  */}
        {earnCardData.map((card, index) => (
          <EarnCard
            key={index}
            img={card.img}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default How_Earn;
