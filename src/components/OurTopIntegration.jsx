import React from 'react'
import nearLogo from '../assets/home/near-logo.png'
import stackLogo from '../assets/home/stacks-logo.png'
import solanaLogo from '../assets/home/solana-logo.png'
import usddLogo from '../assets/home/usdd-logo.png'

const OurTopIntegration = () => {
  return (
      <div className='max-w-7xl mx-auto text-white py-10 flex items-center justify-between'>
          <div className='border-l-3 border-[#34c9fb] pl-4 flex flex-col gap-1'>
              <h2 className='text-color text-2xl font-semibold'>Our Top Integration</h2>
              <p>Cloud mining is the easiest and most</p>
          </div>
          <div className='flex items-center gap-28'>
              {
                  [nearLogo, stackLogo, solanaLogo, usddLogo].map((logo, index) => (
                      <img src={logo} alt="logo" className='h-4 object-cover' key={index} />
                  ))
             }
          </div>
    </div>
  )
}

export default OurTopIntegration
