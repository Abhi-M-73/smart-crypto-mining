import React from 'react';
import HeroSection from '../components/HeroSection';
import OurTopIntegration from '../components/OurTopIntegration';
import ProductSection from '../components/ProductSection';
import ServiceSection from '../components/ServiceSection';
import FeatureSection from '../components/FeatureSection';
import CoinDoxSection from '../components/CoinDoxSection';

const Home = () => {

    return (
        <div className="sm:max-w-7xl w-full mx-auto text-white" >
            <HeroSection />
            <OurTopIntegration />
            <ProductSection />
            <ServiceSection />
            <FeatureSection />
            <CoinDoxSection />
        </div>
    )
}

export default Home;
