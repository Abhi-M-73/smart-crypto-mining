import React from 'react'
import zicZacImage from '../assets/product/zic-zack.png'
import FeaturedProductCard from './FeaturedProductCard'

const FeaturedProductSection = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-4xl text-center font-semibold'>Featured Products</h1>
        <img src={zicZacImage} alt="underline-image" />
      </div>
      <div className='flex items-center gap-5'>
        <FeaturedProductCard img={zicZacImage} power='1000' processor='i7' price='99.99' title='Zic-Zac' />
        <FeaturedProductCard img={zicZacImage} power='1000' processor='i7' price='99.99' title='Zic-Zac' />
      </div>
    </div>
  )
}

export default FeaturedProductSection
