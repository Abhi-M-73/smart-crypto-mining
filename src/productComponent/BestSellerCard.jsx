import React from 'react';

const BestSellerCard = ({ image, title }) => {
  return (
    <div className="bg-gradient-to-b from-[#0c8ce9] to-[#00c0fa] p-2 rounded-lg flex flex-col items-center gap-2 transform hover:scale-105 transition duration-300 cursor-pointer">
      <div className="bg-white rounded-2xl">
        <img src={image} alt={title} className="w-30 h-20 object-contain" />
      </div>
      <p className="text-white font-medium">{title}</p>
    </div>
  );
};

export default BestSellerCard;
