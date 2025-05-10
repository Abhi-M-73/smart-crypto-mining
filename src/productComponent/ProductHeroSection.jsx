import React from 'react'
import { BiSolidOffer } from 'react-icons/bi'
import cloudImage from '../assets/product/cloud-with-coin.png'

const ProductHeroSection = () => {
    return (
        <div className='bg-gradient-to-r from-[#58c1e3] to-[#04a3c7] flex w-full my-5 rounded-2xl'>
            <div className='w-[50%] p-10'>
                <div className='text-4xl font-semibold'>
                    <h2>Get Your First <span className='text-7xl font-bold text-color'>MINING</span></h2>
                    <h2>Output Today. Get a</h2>
                    <h2>Piece of the Future.</h2>
                </div>
                <p className='mt-5'>Our goal is to provide high quality cryptocurrency miners at best rate possible to our clients.</p>
                <div className='flex gap-5'>
                    <button className='px-6 sm:px-8 py-2 btn-color font-medium text-base sm:text-sm md:text-xl mt-5'>
                        Start Mining Now
                    </button>
                    <button className='px-6 sm:px-8 py-2 btn-color font-medium text-base sm:text-sm md:text-xl mt-5 flex items-center gap-2'>
                        <span> <BiSolidOffer className='text-black' /> </span>Check Our Latest Offers
                    </button>
                </div>
            </div>
            <div className='w-[50%] relative'>
                <img src={cloudImage} alt="cloud-image" className='absolute -bottom-32 right-20' />
            </div>
        </div>
    )
}

export default ProductHeroSection
