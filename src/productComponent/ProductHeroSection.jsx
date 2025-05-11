import React from 'react';
import { BiSolidOffer } from 'react-icons/bi';
import cloudImage from '../assets/product/cloud-with-coin.png';

const ProductHeroSection = () => {
    return (
        <div className='bg-gradient-to-l from-[#58c1e3] to-[#04a3c7] flex flex-col lg:flex-row w-full my-5 rounded-2xl'>
            {/* Left Side (Text Section) */}
            <div className='w-full lg:w-[50%] p-5 sm:p-10 text-center lg:text-left'>
                <div className='text-3xl sm:text-4xl font-semibold'>
                    <h2 className='text-xl sm:text-2xl md:text-4xl'>
                        Get Your First <span className='text-4xl sm:text-5xl font-bold text-[#10ebfa]'>MINING</span>
                    </h2>
                    <h2 className='text-xl sm:text-2xl md:text-4xl'>Output Today. Get a</h2>
                    <h2 className='text-xl sm:text-2xl md:text-4xl'>Piece of the Future.</h2>
                </div>
                <p className='mt-5 text-sm sm:text-base'>
                    Our goal is to provide high quality cryptocurrency miners at best rate possible to our clients.
                </p>
                <div className='flex flex-col sm:flex-row sm:gap-5 gap-0 justify-center lg:justify-start'>
                    <button className='px-6 sm:px-8 py-3 btn-color font-medium text-sm sm:text-base md:text-xl mt-5'>
                        Start Mining Now
                    </button>
                    <button className='px-6 sm:px-8 py-3 btn-color font-medium text-sm sm:text-base md:text-xl mt-5 flex items-center gap-2 justify-center'>
                        <span><BiSolidOffer className='text-black' /></span>Check Our Latest Offers
                    </button>
                </div>
            </div>

            {/* Right Side (Image Section) */}
            <div className='w-full lg:w-[50%] relative mt-10 lg:mt-0 flex justify-center items-center'>
                <img src={cloudImage} alt="cloud-image" className='w-[100%] sm:w-[50%] lg:w-auto lg:absolute lg:-bottom-32 lg:right-20' />
            </div>
        </div>
    );
}

export default ProductHeroSection;
