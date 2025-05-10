import React from 'react';

const FeatureCard = ({ title, subTitle, pointOne, pointTwo }) => {
    return (
        <div className="w-full sm:w-80 md:w-96 bg-[#111828] border-2 border-[#111828] hover:border-[rgb(68,111,120)] hover:bg-[#1b7a99] transition-all duration-300 py-8 px-6 text-white shadow-lg space-y-5">
            <div className="space-y-2">
                <div className="border-l-4 border-[#2eb4e0] pl-4">
                    <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
                </div>
                <p className="text-xl md:text-2xl pl-4">{subTitle}</p>
            </div>
            <div className="pl-4 text-sm md:text-md text-gray-300 space-y-3">
                <p>{pointOne}</p>
                <p>{pointTwo}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
