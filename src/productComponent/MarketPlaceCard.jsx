import React from 'react';

const MarketPlaceCard = ({icon, title, description }) => {
    return (
        <div className="border border-blue-500 rounded-lg p-8 text-center hover:scale-105 transition-all duration-300">
            {/* Circle Icon Placeholder */}
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 text-3xl text-black">
               {icon}
            </div>
            <h3 className="font-semibold text-blue-400 mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
        </div>
    );
};

export default MarketPlaceCard;
