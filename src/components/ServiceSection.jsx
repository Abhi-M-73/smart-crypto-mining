import React from 'react';
import { serviceCardData } from '../utils/constant';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
    return (
        <div className="max-w-7xl mx-auto text-white sm:py-20 py-10 px-4 sm:px-6 md:px-8">
            {/* Heading */}
            <div className="flex items-center justify-between">
                <div className="border-l-4 border-[#2eb4e0] pl-4 text-md">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-color">Service</h1>
                </div>
            </div>

            {/* Responsive Grid */}
            <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-10">
                {serviceCardData.map((card, index) => (
                    <ServiceCard key={index} img={card.img} title={card.title} />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
