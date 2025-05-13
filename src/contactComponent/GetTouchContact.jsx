import React from "react";
import animat from "../assets/contact/Animation.png";
import moon from "../assets/contact/Imagemoon.png";
import { FaRocket } from "react-icons/fa";

const GetTouchContact = () => {
  return (
    <div className="relative w-full text-white py-12 px-4">
      {/* Blurred background */}
      <div
        className="absolute -inset-10 bg-center bg-contain bg-no-repeat w-96 sm:w-full mt-5"
        style={{ backgroundImage: `url(${animat})` }}
      ></div>

      {/* Main content over blurred background */}
      <div className="relative max-w-5xl mx-auto lg:py-6 lg:px-6 flex flex-col lg:flex-row items-center justify-between rounded-2xl p-6 md:p-8 gap-8 bg-black/30">
        {/* Form Section */}
        <div className="w-full lg:w-[50%]">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-center lg:text-left">
            Let's connect constellations
          </h1>
          <p className="mb-6 text-sm md:text-base text-gray-300 text-center lg:text-left">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-2 rounded bg-[#1e293b] text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-2 rounded bg-[#1e293b] text-white placeholder-gray-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-[#1e293b] text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 rounded bg-[#1e293b] text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full p-2 rounded bg-[#1e293b] text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full btn-color transition-all text-white py-2 rounded font-semibold flex justify-center items-center gap-2"
            >
              Send it to the moon <FaRocket />
            </button>
          </form>
        </div>

        {/* Astronaut Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center mt-8 lg:mt-0">
          <div className="relative p-0 rounded-2xl text-center max-w-sm">
            <img
              src={moon}
              alt="Astronaut"
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 text-white text-sm text-center w-[90%]">
              <p className="italic text-white line-clamp-3 drop-shadow-md">
                "Two lunar months revealed Earth's fragile beauty against vast
                silence, transforming my view of our place in the universe."
              </p>
              <p className="mt-2 text-white drop-shadow-md">— Irinel Traista</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouchContact;
