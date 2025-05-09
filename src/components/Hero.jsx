import React from 'react'
import heroImage from '../assets/home/hero-bg-image.png'; // Importing the image
const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto text-white py-20 h-[65vh] w-full bg-no-repeat bg-cover bg-right' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='flex flex-col gap-8'>
                <div className='text-8xl text-color font-semibold'>
                    <h1>Smart CRYPTO</h1>
                    <h1>Mining</h1>
                </div>
                <div className='border-l-3 border-[#34c9fb] pl-4 text-lg'>
                    <p>Cloud mining: Easy and efficient way to earn from</p>
                    <p>cryptocurrency without equipment.</p>
                </div>
                <div>
                    <button className='px-8 py-2 btn-color font-semibold text-xl'>Start Mininig Now</button>
                </div>
           </div>
        </div>
    )
}

export default Hero
