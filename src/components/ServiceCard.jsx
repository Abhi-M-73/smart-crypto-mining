import React from 'react';

const ServiceCard = ({ img, title }) => {
    return (
        <div className="w-full sm:w-80 md:w-80 bg-[#111828] border-2 border-[#111828] hover:border-[rgb(68,111,120)] hover:bg-[#1b7a99] transition-all duration-300 py-10 px-8 sm:px-10 md:px-14 text-white shadow-lg flex flex-col items-start space-y-3">
            <img src={img} alt="icon-image" className="h-10 w-10" />
            <h2 className="text-lg font-semibold text-gray-200">{title}</h2>
        </div>
    );
};

export default ServiceCard;
