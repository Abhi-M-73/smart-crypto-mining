import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <div className='max-w-7xl mx-auto text-white py-10'>
            <div className='flex items-center justify-between'>
                <div className='border-l-3 border-[#2eb4e0] pl-4 text-md'>
                    <h1 className='text-4xl font-semibold text-color'>Product</h1>
                </div>
                <div className='border-l-3 border-[#34c9fb] pl-4 text-md'>
                    <p>We are on a mission to empower innovation </p>
                    <p>and revolutionize.</p>
                </div>
            </div>
            <div className='py-10'>
                <ProductCard />
            </div>
        </div>
    )
}

export default Products
