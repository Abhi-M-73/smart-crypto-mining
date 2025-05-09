import React from 'react'
import logo from '../assets/home/logo.png'
import { FaUser } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto bg-color text-white flex items-center justify-between py-4'>
            <div>
                <img src={logo} alt="logo" className='h-10 object-cover' />
            </div>
            <div className='flex items-center gap-5'>
                <button className='px-8 py-2 bg-[#182335] font-semibold hover:bg-[#0B0B29] transition-all duration-300 flex items-center gap-2'> <span><FaUser /></span>
                    Login
                </button>
                <button className='px-4 py-2 bg-[#182335] hover:bg-[#0B0B29] transition-all duration-300 flex items-center gap-2'> 
                    <CgMenuRight className='text-2xl font-semibold' />
                </button>
            </div>
        </div>
    )
}

export default Navbar
