import React from 'react';
import zicZacImage from '../assets/product/zic-zack.png';
import FeaturedProductCard from './FeaturedProductCard';
import { featuredProductCardData } from '../utils/constant';

const FeaturedProductSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center justify-center py-10">
        <h1 className="text-3xl sm:text-4xl text-center font-semibold">Featured Products</h1>
        <img src={zicZacImage} alt="underline-image" className="w-32 sm:w-auto" />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
        {featuredProductCardData.map((card, index) => (
          <FeaturedProductCard
            key={index}
            img={card.img}
            power={card.power}
            processor={card.processor}
            price={card.price}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductSection;
