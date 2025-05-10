import React from 'react';
import nearLogo from '../assets/home/near-logo.png';
import stackLogo from '../assets/home/stacks-logo.png';
import solanaLogo from '../assets/home/solana-logo.png';
import usddLogo from '../assets/home/usdd-logo.png';

const OurTopIntegration = () => {
    return (
        <div className="max-w-7xl mx-auto text-white py-10 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
            {/* Text Section */}
            <div className="border-l-4 border-[#34c9fb] pl-4 flex flex-col gap-1">
                <h2 className="text-color text-xl sm:text-2xl font-semibold">Our Top Integration</h2>
                <p className="text-sm sm:text-base">Cloud mining is the easiest and most</p>
            </div>

            {/* Logos Section */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 md:gap-20">
                {[nearLogo, stackLogo, solanaLogo, usddLogo].map((logo, index) => (
                    <img src={logo} alt="logo" className="h-4 object-cover" key={index} />
                ))}
            </div>
        </div>
    );
};

export default OurTopIntegration;
