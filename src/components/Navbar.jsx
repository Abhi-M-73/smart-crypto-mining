import React from 'react';
import logo from '../assets/home/logo.png';
import miniLogo from '../assets/home/mini-logo.png';
import { FaUser } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ open, setOpen }) => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto bg-color text-white flex items-center justify-between py-3 px-4 sm:px-6 md:px-8">
            {/* Logo Section */}
            <div onClick={() => navigate('/')}>
                <img src={logo} alt="logo" className="h-10 object-cover hidden sm:block" />
                <img src={miniLogo} alt="mini logo" className="h-10 object-cover block sm:hidden" />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 sm:gap-5">
                {/* Login Button */}
                <button className="px-4 sm:px-6 md:px-8 py-2 bg-[#182335] font-semibold hover:bg-[#0B0B29] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                    <FaUser />
                    <span>Login</span>
                </button>

                {/* Menu Button */}
                <button onClick={() => setOpen(!open)} className="px-3 sm:px-4 py-2 bg-[#182335] hover:bg-[#0B0B29] transition-all duration-300 flex items-center">
                    <CgMenuRight className="text-xl sm:text-2xl font-semibold" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
