import React from "react";
import { SlArrowRight } from "react-icons/sl";

const SubscribeNews = () => {
  return (
    <div className="max-w-7xl mx-auto text-white py-10 px-4">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-color">
        <h1 className="tracking-tight leading-tight">
          Join our mailing list to get the latest updates &{" "}
          <span className="font-semibold">announcements</span>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-10 w-full">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Email@gmail.com"
          className="w-full sm:w-[70%] text-sm font-semibold py-4 px-3 bg-gray-600 rounded text-white"
        />

        {/* Button */}
        <button className="w-full sm:w-[30%] px-6 py-4 flex items-center justify-between text-black btn-color text-base sm:text-lg font-bold rounded">
          Start Mining Now <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SubscribeNews;
