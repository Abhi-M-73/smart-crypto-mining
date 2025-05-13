import React from "react";
import robotImage from "../assets/blog/robot.png"; // Ensure this path is correct
import svg1 from "../assets/blog/1.svg";
import svg2 from "../assets/blog/2.svg";
import svg3 from "../assets/blog/3.svg";
import svg4 from "../assets/blog/4.svg";
import svg5 from "../assets/blog/5.svg";
const relatedArticles = [
  {
    id: 1,
    title: "Integer Malesuada Eget Viverra",
    image: svg1 ,
  },
  {
    id: 2,
    title: "A Pretium Enim Dolor Donec Eu Venenatis Curabitur",
    image: svg2,
  },
  {
    id: 3,
    title: "A Vivamus Penatibus Enim Sit Et Quam Vel Consequat",
    image: svg3,
  },
  {
    id: 4,
    title: "Integer Malesuada Eget Viverra",
    image: svg4,
  },
];

export default function BlogHeroSection() {
  return (
    <div className="bg-[#0f172a] text-white  mt-10  px-4 py-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-4">
          Home &gt; Blog &gt; 5 Efficient Rules How To Organize Your Working Place
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Hero Section */}
          <div className="flex-1 relative rounded-lg overflow-hidden">
            <img
              src={robotImage}
              alt="Robot with money"
              className="w-full h-[500px] object-cover rounded-lg"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex gap-4 text-sm text-gray-300 mb-2 flex-wrap">
                <span className="hover:underline cursor-pointer">Aenean Eleifend</span>
                <span>/</span>
                <span className="hover:underline cursor-pointer">Aenean Eleifend</span>
                <span>/</span>
                <span className="hover:underline cursor-pointer">Aliquam</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl mb-2">
                5 EFFICIENT RULES HOW TO ORGANIZE YOUR WORKING PLACE
              </h1>
              <p className="text-gray-200 mb-3 text-base md:text-lg">
                Relationship tips couples therapists are giving all the time
              </p>
              <div className="text-gray-400 text-sm flex flex-wrap gap-2">
                <span>by Joanna Welllick</span>
                <span>•</span>
                <span>2 minute read</span>
                <span>•</span>
                <span>1.6K views</span>
                <span>•</span>
                <span>12K shares</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-4">
            {relatedArticles.map((article) => (
              <div
                key={article.id}
                className="flex items-center gap-4 bg-[#1e293b] rounded-lg p-3 hover:bg-[#334155] transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-14 h-14 object-cover rounded-full border border-gray-600"
                />
                <p className="text-sm text-white font-medium leading-snug">
                  {article.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
