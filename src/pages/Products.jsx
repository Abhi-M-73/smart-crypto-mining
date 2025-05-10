import React from 'react'
import ProductHeroSection from '../productComponent/ProductHeroSection'
import ProductOverview from '../productComponent/ProductOverview'
import DealOfDay from '../productComponent/DealOfDay'
import FeaturedProductSection from '../productComponent/FeaturedProductSection'
import PopularBrands from '../productComponent/PopularBrands'

const Products = () => {
    return (
        <div className="sm:max-w-7xl w-full mx-auto text-white " >
            <ProductHeroSection />
            <ProductOverview />
            <DealOfDay />
            <FeaturedProductSection />
            <PopularBrands />
        </div>
    )
}

export default Products
