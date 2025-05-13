import React, { useState } from "react";
import logo from "../assets/home/logo.png";
import signimg from "../assets/home/signup.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    registerCode: "",
    fullName: "",
    location: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto text-white py-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-700 p-4 rounded-xl">
        {/* Left Side */}
        <div className="md:w-1/2 w-full flex flex-col items-center text-center mb-10 md:mb-0">
          <img src={logo} alt="logo" className="h-10 mb-4" />
          <h1 className="text-3xl font-semibold">Welcome to</h1>
          <h1 className="text-5xl font-bold text-color mb-6">Anon Miner</h1>
          <img src={signimg} alt="signup" className="max-h-72 sm:max-h-80 md:max-h-120 object-contain" />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-white text-gray-800 flex   items-center justify-center px-5 py-1 rounded-l-4xl">
          <div className="w-full max-w-md ">
            <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="registerCode"
                placeholder="Reference Code"
                value={formData.registerCode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="sm:w-1/3 w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="sm:w-2/3 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className="accent-gray-600"
                />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-blue-600 underline">
                    terms and conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
