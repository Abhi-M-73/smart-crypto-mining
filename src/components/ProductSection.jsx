import React from 'react';
import ProductCard from './ProductCard';
import { productCardData } from '../utils/constant';

const ProductSection = () => {
    return (
        <div className="max-w-7xl mx-auto text-white sm:py-20 py-10 px-4 sm:px-6 md:px-8">
            {/* Top Heading Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
                <div className="border-l-4 border-[#2eb4e0] pl-4 text-md">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-color">Product</h1>
                </div>
                <div className="border-l-4 border-[#34c9fb] pl-4 text-md">
                    <p className="text-sm sm:text-base">We are on a mission to empower innovation</p>
                    <p className="text-sm sm:text-base">and revolutionize.</p>
                </div>
            </div>

            {/* Product Cards */}
            <div className="py-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 flex-wrap">
                {productCardData.map((card, index) => (
                    <ProductCard
                        key={index}
                        contract={card.contract}
                        crypto={card.crypto}
                        expiry={card.expiry}
                        price={card.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
