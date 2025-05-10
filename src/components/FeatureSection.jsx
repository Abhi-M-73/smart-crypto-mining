import React from 'react';
import FeatureCard from './FeatureCard';
import { featuresCardData } from '../utils/constant';

const FeatureSection = () => {
    return (
        <div className="max-w-7xl mx-auto text-white px-4 sm:px-6 md:px-8 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {featuresCardData.map((card, index) => (
                    <FeatureCard
                        key={index}
                        title={card.title}
                        subTitle={card.subTitle}
                        pointOne={card.pointOne}
                        pointTwo={card.pointTwo}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
