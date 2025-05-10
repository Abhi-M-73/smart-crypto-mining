import React from 'react'
import { FaMicrochip } from 'react-icons/fa'
import { ImPower } from 'react-icons/im'
import { MdShoppingCart } from 'react-icons/md'

const FeaturedProductCard = ({ img, power, processor, price, title }) => {
    return (
        <div className='w-[70%] bg-white rounded-lg text-black p-5'>
            <div>
                <img src={img} alt="image" className='h-40 w-40 object-cover mx-auto' />
            </div>
            <hr />
            <div className='mt-5'>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-1 text-md text-gray-500'><ImPower />{power}</p>
                    <p className='flex items-center gap-1 text-md text-gray-500'><FaMicrochip />{processor}</p>
                </div>
                <h1 className='text-xl font-semibold tracking-tight'>{title}</h1>
                <div className='mt-5 flex items-center justify-between'>
                    <button className='text-2xl font-normal px-6 py-1 border-2 text-[#019adf] border-[#019adf] hover:bg-[#019adf] hover:text-white transition duration-300 rounded-lg'>{price}$</button>
                    <button className='text-2xl font-normal px-4 py-2 text-white bg-[#019adf] hover:bg-[#00c4ff] transition duration-300 rounded-lg'>
                        <MdShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductCard
