import React from 'react';
import heroImage from '../assets/home/hero-bg-image.png';

const HeroSection = () => {
    return (
        <div
            className="max-w-7xl mx-auto text-white py-20 h-[70vh] w-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-color">
                    <h1>Smart CRYPTO</h1>
                    <h1>Mining</h1>
                </div>
                <div className="border-l-4 border-[#34c9fb] pl-4 text-sm sm:text-base md:text-lg">
                    <p>Cloud mining: Easy and efficient way to earn from</p>
                    <p>cryptocurrency without equipment.</p>
                </div>
                <div>
                    <button className="px-6 sm:px-8 py-2 btn-color font-semibold text-base sm:text-lg md:text-xl">
                        Start Mining Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
