import React, { useState } from 'react';
import zicZacImage from '../assets/product/zic-zack.png';

const SubscribeSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Basic form validation
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!name || !email) {
            setError('Please fill in both fields.');
            return;
        }

        // Simple email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setSuccess(true);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28 mt-10">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                {/* Text Section */}
                <div className="flex-1 text-white text-center md:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        Get the latest news, product notifications, and <br />
                        <span className="relative inline-block">
                            exclusive deals
                            {/* Underline */}
                            <img src={zicZacImage} alt="underline-image" />
                        </span> in your inbox!
                    </h2>
                </div>

                {/* Form Section */}
                <form className="flex flex-col md:flex-row items-center gap-5 flex-1" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="text-white text-sm mb-1" htmlFor="name">
                            First<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 bg-white rounded-md outline-none text-black w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="text-white text-sm mb-1" htmlFor="email">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 bg-white rounded-md outline-none text-black w-full"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded-md mt-4 md:mt-0 hover:bg-gray-800 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Error and Success Messages */}
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">Thank you for subscribing, {name}!</p>}
            </div>
        </div>
    );
};

export default SubscribeSection;
