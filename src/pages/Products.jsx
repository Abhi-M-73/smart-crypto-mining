import React from 'react'
import ProductHeroSection from '../productComponent/ProductHeroSection'
import ProductOverview from '../productComponent/ProductOverview'
import DealOfWeek from '../productComponent/DealOfWeek'
import FeaturedProductSection from '../productComponent/FeaturedProductSection'
import PopularBrands from '../productComponent/PopularBrands'
import MarketPlaceSection from '../productComponent/MarketPlaceSection'
import BestSellerSection from '../productComponent/BestSellerSection'
import SubscribeSection from '../productComponent/SubscribeSection'

const Products = () => {
    return (
        <div className="sm:max-w-7xl w-full mx-auto text-white " >
            <ProductHeroSection />
            <ProductOverview />
            <DealOfWeek />
            <FeaturedProductSection />
            <PopularBrands />
            <MarketPlaceSection />
            <BestSellerSection />
            <SubscribeSection />
        </div>
    )
}

export default Products
