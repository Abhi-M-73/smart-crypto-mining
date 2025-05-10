import React from 'react';
import { FaMicrochip } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';

const DealCard = ({ img, power, processor, price, title }) => {
    return (
        <div className='bg-white rounded-lg text-black p-5 shadow-md hover:shadow-lg hover:-translate-y-2 transform transition-all duration-300 cursor-pointer'>
            {/* Image */}
            <div>
                <img src={img} alt="image" className='h-40 w-40 object-cover mx-auto' />
            </div>

            <hr className='my-3' />

            {/* Details */}
            <div className='mt-3'>
                <div className='flex items-center justify-between text-sm text-gray-500'>
                    <p className='flex items-center gap-1'><ImPower />{power}</p>
                    <p className='flex items-center gap-1'><FaMicrochip />{processor}</p>
                </div>

                <h1 className='text-lg font-semibold tracking-tight mt-2'>{title}</h1>
                <h2 className='text-xl font-bold text-[#019adf] mt-2'>{price}$</h2>
            </div>
        </div>
    );
};

export default DealCard;
