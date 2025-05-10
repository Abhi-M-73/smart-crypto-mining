import React from 'react'

const ProductHeroSection = () => {
    return (
        <div className='btn-color w-full my-5 rounded-2xl'>
            <div className='w-[50%] p-10'>
                <div className='text-4xl font-semibold'>
                    <h2>Get Your First <span className='text-7xl font-bold text-color'>MINING</span></h2>
                    <h2>Output Today. Get a</h2>
                    <h2>Piece of the Future.</h2>
                </div>
                <p className='mt-5'>Our goal is to provide high quality cryptocurrency miners at best rate possible to our clients.</p>
                <div className='flex gap-5'>
                    <button className='px-6 sm:px-8 py-2 btn-color font-semibold text-base sm:text-lg md:text-xl mt-5'>
                        Start Mining Now
                    </button>
                    <button className='px-6 sm:px-8 py-2 btn-color font-semibold text-base sm:text-lg md:text-xl mt-5'>
                        Check Our Latest Offers
                    </button>
                </div>
            </div>
            <div className='w-[50%]'></div>
        </div>
    )
}

export default ProductHeroSection
