import React from 'react';
import zicZacImage from '../assets/product/zic-zack.png';
import { marketPlaceData } from '../utils/constant';
import MarketPlaceCard from './MarketPlaceCard';

const MarketPlaceSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            {/* Heading */}
            <div className="flex flex-col gap-3 items-center justify-center mt-20">
                <h1 className="text-3xl sm:text-4xl text-center font-semibold">
                    Why Choose Asic Marketplace
                </h1>
                <img src={zicZacImage} alt="underline-image" className="w-32 sm:w-auto" />
            </div>
            <div className="w-full sm:w-[70%] lg:w-[40%] mx-auto mt-3">
                <p className="text-md text-gray-300 text-center">
                    Our goal is to provide high quality cryptocurrency miners at best rate possible to our clients.
                </p>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pb-10 py-10">
                {marketPlaceData.map((card, index) => (
                    <MarketPlaceCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default MarketPlaceSection;
