import React from 'react';
import arrowImage from '../assets/product/arrow.png';
import { dealCardData } from '../utils/constant';
import DealCard from './DealCard';

const DealOfWeek = () => {
    return (
        <div className='bg-gradient-to-l from-[#58c1e3] to-[#018cab] flex flex-col lg:flex-row items-center justify-between w-full my-10 rounded-2xl py-10 px-5'>
            {/* Left Side (Text + Arrow) */}
            <div className='text w-full lg:w-[25%] text-4xl sm:text-5xl font-semibold sm:p-12 relative text-center lg:text-left'>
                <h1>Deal of the</h1>
                <h1>Week</h1>
                <img
                    src={arrowImage}
                    alt="arrow"
                    className='hidden lg:block absolute right-10 top-20'
                />
            </div>

            {/* Right Side (Cards) */}
            <div className='w-full lg:w-[70%] flex flex-col lg:flex-row justify-center gap-5 mt-5 lg:mt-0'>
                {
                    dealCardData.map((card, index) => (
                        <DealCard
                            key={index}
                            img={card.img}
                            power={card.power}
                            processor={card.processor}
                            price={card.price}
                            title={card.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default DealOfWeek;
