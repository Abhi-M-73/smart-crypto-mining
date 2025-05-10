import React from 'react';
import HeroSection from '../components/HeroSection';
import OurTopIntegration from '../components/OurTopIntegration';
import ProductSection from '../components/ProductSection';
import ServiceSection from '../components/ServiceSection';
import FeatureSection from '../components/FeatureSection';
import CoinDoxSection from '../components/CoinDoxSection';
import How_Earn from '../components/How_Earn'
import QuestionPage from '../components/QuestionPage';
import { StartMining } from '../components/StartMining';
import SuscribeNews from '../components/SuscribeNews';

const Home = () => {

    return (
        <div className="sm:max-w-7xl w-full mx-auto text-white" >
            <HeroSection />
            <OurTopIntegration />
            <ProductSection />
            <ServiceSection />
            <FeatureSection />
            <CoinDoxSection />
            <How_Earn />
            <QuestionPage />
            <StartMining/>
            <SuscribeNews/>
        </div>
    )
}

export default Home;
