import React from 'react'
import arrowImage from '../assets/product/arrow.png'
import { dealCardData } from '../utils/constant'
import DealCard from './DealCard'

const DealOfDay = () => {
    return (
        <div className='bg-gradient-to-l from-[#58c1e3] to-[#018cab] flex items-center justify-between w-full my-30 rounded-2xl py-10'>
            <div className='text w-[30%] text-5xl font-semibold p-12 relative'>
                <h1>Deal of the</h1>
                <h1>week</h1>
                <img src={arrowImage} alt="arrow" className='absolute right-10 top-30' />
            </div>
            <div className='w-[70%] flex gap-5 items-center px-5'>
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

export default DealOfDay
