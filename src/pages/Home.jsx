import React from 'react';
import Hero from '../components/Hero';
import OurTopIntegration from '../components/OurTopIntegration';
import Products from '../components/Products';

const Home = () => {
    return (
        <div
            className="max-w-7xl mx-auto text-white"
            
        >
            <Hero />
            <OurTopIntegration />
            <Products />
        </div>
    )
}

export default Home;
