import React from 'react';
import coinDox from '../assets/home/coindox.png';

const CoinDoxSection = () => {
    return (
        <div className="max-w-7xl mx-auto text-white py-5 btn-color flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="flex flex-col md:flex-row gap-10 md:gap-30 px-0 md:px-20 items-center md:items-start">
                {/* Image */}
                <div className="w-full md:w-[40%]">
                    <img src={coinDox} alt="coindox" className="w-full h-auto" />
                </div>

                {/* Text Content */}
                <div className="w-full space-y-6 py-6 md:py-10 text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-semibold space-y-1">
                        <h2>About Coindox - We Translate Your</h2>
                        <h2>Dream Into Reality</h2>
                    </div>
                    <div className="w-full md:w-[70%] space-y-4 mx-auto md:mx-0">
                        <p>
                            Welcome to Coindox Bitcoin Mining, where your dreams of entering
                            the world of cryptocurrency mining transform into tangible
                            reality. Our mission is simple yet powerful: to provide you with
                            the tools, expertise,
                        </p>
                        <p>
                            Support needed to navigate the intricate world of Bitcoin mining
                            and turn your aspirations into profitable outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDoxSection;
