import React from 'react'
import { FaMicrochip } from 'react-icons/fa'
import { ImPower } from 'react-icons/im'

const DealCard = ({ img, power, processor, price, title }) => {
    return (
        <div className='w-[70%] bg-white rounded-lg text-black p-5'>
            <div>
                <img src={img} alt="image" className='h-40 w-40 object-cover mx-auto' />
            </div>
            <hr />
            <div className='mt-5'>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-1'><ImPower />{power}</p>
                    <p className='flex items-center gap-1'><FaMicrochip />{processor}</p>
                </div>
                <h1 className='text-xl font-semibold tracking-tight'>{title}</h1>
                <h2 className='text-2xl font-normal'>{price}$</h2>
            </div>
        </div>
    )
}

export default DealCard
