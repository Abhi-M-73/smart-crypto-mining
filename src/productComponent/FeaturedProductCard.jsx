import React from 'react';
import { FaMicrochip } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';
import { MdShoppingCart } from 'react-icons/md';

const FeaturedProductCard = ({ img, power, processor, price, title }) => {
    return (
        <div className='bg-white rounded-lg text-black p-5 shadow-md hover:translate-y-1 transition duration-300 cursor-pointer'>
            {/* Product Image */}
            <div>
                <img src={img} alt="image" className='h-40 w-40 object-cover mx-auto' />
            </div>

            <hr className='my-3' />

            {/* Product Details */}
            <div className='mt-3'>
                <div className='flex items-center justify-between  text-sm text-gray-500'>
                    <p className='flex items-center gap-1'><ImPower />{power}</p>
                    <p className='flex items-center gap-1'><FaMicrochip />{processor}</p>
                </div>

                <h1 className='text-lg font-semibold tracking-tight mt-2'>{title}</h1>

                {/* Price + Cart */}
                <div className='mt-4 flex items-center justify-between'>
                    <button className='text-lg font-medium px-4 py-1 border-2 text-[#019adf] border-[#019adf] hover:bg-[#019adf] hover:text-white transition duration-300 rounded-lg'>
                        {price}$
                    </button>

                    <button className='text-2xl p-2 text-white bg-[#019adf] hover:bg-[#00c4ff] transition duration-300 rounded-lg'>
                        <MdShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductCard;
