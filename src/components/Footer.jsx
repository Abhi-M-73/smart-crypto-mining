import React from "react";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import logo from "../assets/home/logo.png";

export const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto text-white py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="p-6 bg-gray-900 rounded">
          <img src={logo} alt="Logo" className="w-32 mb-8" />
          <div>
            <h1 className="text-gray-300 text-sm uppercase">Social Proof</h1>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="bg-gray-700 p-2 rounded-full text-3xl" />
              <FaInstagram className="bg-gray-700 p-2 rounded-full text-3xl" />
              <IoLogoTwitter className="bg-gray-700 p-2 rounded-full text-3xl" />
              <IoLogoLinkedin className="bg-gray-700 p-2 rounded-full text-3xl" />
              <FaTelegramPlane className="bg-gray-700 p-2 rounded-full text-3xl" />
            </div>
          </div>
          <div className="mt-10 text-sm text-gray-400">
            <p>© 2025. All rights reserved.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="p-6 bg-gray-900 rounded text-xl font-semibold">
          <h1>Useful Links</h1>
          <ul className="mt-5 space-y-2 text-base font-normal">
            <li>Product</li>
            <li>Feature</li>
            <li>Customer</li>
            <li>Social Media</li>
            <li>Control</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="p-6 bg-gray-900 rounded text-xl font-semibold">
          <h1>Any Questions</h1>
          <ul className="mt-5 space-y-2 text-base font-normal">
            <li>What is Bitcoin?</li>
            <li>What is Mining?</li>
            <li>How it works?</li>
            <li>Who we are</li>
            <li>How Anan Miner Works</li>
          </ul>
          <div className="mt-10 text-sm text-gray-400">
            <p>Developed by Nexachain.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
};
