import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProductCard = ({ contract, expiry, price, crypto }) => {
  return (
    <div className="w-full sm:w-80 md:w-96 bg-[#111828] hover:bg-gradient-to-r from-[#228db0] to-[#68def9] transition-all duration-300 py-10 px-8 sm:px-10 md:px-14 text-white shadow-lg flex flex-col justify-between h-auto sm:h-[60vh]">
      {/* Top */}
      <div>
        <p className="text-sm text-gray-400">
          CONTRACT{' '}
          <span className="underline text-gray-200 font-semibold">{contract}</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">{crypto.toUpperCase()}</h2>
      </div>

      {/* Middle */}
      <div className="mt-6">
        <p className="text-xs text-gray-400">EXPIRY</p>
        <p className="text-lg sm:text-xl text-gray-200 font-semibold">{expiry}</p>
        <div className="w-full bg-gray-700 h-[1px] my-5"></div>
        <p className="text-xs text-gray-400">MIN. PRICE</p>
        <p className="text-lg sm:text-xl text-gray-200 font-semibold">{price} Per 10 GH/s</p>
      </div>

      {/* Button */}
      <button className="flex items-center justify-center gap-2 btn-color text-white font-semibold py-2 px-4 rounded mt-6 transition duration-300">
        START MINING
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProductCard;
