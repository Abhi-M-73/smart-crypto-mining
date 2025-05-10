import React from "react";
import bg1 from "../assets/bg1.png";
import { SlArrowRight } from "react-icons/sl";

export const StartMining = () => {
  return (
    <div className="max-w-7xl mx-auto text-white py-10 px-4">
      <div
        className="h-[60vh] bg-center bg-no-repeat bg-cover mx-auto flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="flex flex-col items-center justify-center space-y-4 bg-opacity-50 p-4 sm:p-6 rounded-lg w-full max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Ready To Start Your Mining
          </h1>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl">
            Just create an account on our site and start your first mining.
          </span>
          <button className="mt-4 sm:mt-6 w-full sm:w-64 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between text-black bg-white text-base sm:text-lg md:text-xl font-bold">
            Start Mining Now <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
