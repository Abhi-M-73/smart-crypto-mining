import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from '../utils/constant';

export default function QuestionPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="max-w-full mx-auto  text-white py-10 px-4">
    <div className="max-w-full mx-auto mt-19 p-4 ">
      <h2 className="text-6xl  font-bold mb-20  text-color">Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className=" overflow-hidden hover:border-[rgb(68,111,120)] hover:bg-[#1b7a99] transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-4 py-3 text-left font-medium  transition"
            >
              <span className='text-2xl font-semibold mt-6'>{item.question}</span>
              <ChevronDown
                className={`h-8 w-8 transform  transition-transform btn-color duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 py-3  text-white ">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}