import React from 'react';
import zicZacImage from '../assets/product/zic-zack.png';
import { bestSellerCardData } from '../utils/constant';
import BestSellerCard from './BestSellerCard'; 

const BestSellerSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-5"> 
            <div className="flex flex-col gap-3 items-center justify-center mt-20">
                <h1 className="text-4xl text-center font-semibold">Best Seller Brands</h1>
                <img src={zicZacImage} alt="underline-image" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 pb-10 py-10">
                {bestSellerCardData.map((card, index) => (
                    <BestSellerCard
                        key={index}
                        title={card.title}
                        image={card.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellerSection;
