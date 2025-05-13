import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaMediumM,
  FaTelegramPlane,
  FaVimeoV,
  FaGoogle
} from "react-icons/fa";
import { CheckCircle2 } from "lucide-react"; 
// Import images
;
import postImage from "../assets/blog/Rectangle 1317.png";
import { FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import Rectangle11 from "../assets/blog/Rectangle111.png";
import Ellipse from "../assets/blog/Ellipse 163.svg"; 
import Img29 from "../assets/blog/image 29.png";
import Img28 from "../assets/blog/image 28.png";
import Img30 from "../assets/blog/image 30.png";
import bnb1 from "../assets/blog/bnb-image.png"; 
import Img1 from "../assets/blog/Rectangle (1).png";
import Img2 from "../assets/blog/Rectangle (2).png";
import Img3 from "../assets/blog/Rectangle (3).png";
import Img4 from "../assets/blog/Rectangle (4).png";
import Img5 from "../assets/blog/Rectangle (5).png";
import Img6 from "../assets/blog/Rectangle (6).png";
const socialStats = [
  { icon: <FaFacebookF />, label: "Facebook", stats: "96 Likes" },
  { icon: <FaTwitter />, label: "Twitter", stats: "40K Followers" },
  { icon: <FaInstagram />, label: "Instagram", stats: "20K Followers" },
  { icon: <FaPinterestP />, label: "Pinterest", stats: "13K Likes" },
  { icon: <FaYoutube />, label: "Youtube", stats: "625K Subscribers" },
  { icon: <FaSoundcloud />, label: "SoundCloud", stats: "20K Followers" },
  { icon: <FaMediumM />, label: "Medium", stats: "13K Likes" },
  { icon: <FaVimeoV />, label: "Vimeo", stats: "20K Followers" },
  { icon: <FaTelegramPlane />, label: "Telegram", stats: "90K Followers" },
];

export default function BlogContentSection() {
      const listItems = [
    "Ultricies sit semper leo dolor maecenas.",
    "Magnis nam penatibus justo nec quis eget amet venenatis integer rutrum eleifend commodo tincidunt.",
    "Aenean nunc pretium lorem ullamcorper leo.",
    "Nec arcu ullamcorper lorem mus eu.",
    "Elit natoque mollis quisque.",
  ];

  return (
    <div className="bg-[#0f172a] text-white px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Share Sidebar */}
        <div className="lg:col-span-1 flex flex-col items-center space-y-3">
          <div className="text-sm text-gray-400 text-center">
            <div className="text-lg font-bold text-white">966</div>
            Shares
          </div>
          <button className="bg-white text-blue-600 rounded-full p-2">
            <FaFacebookF />
          </button>
          <div className="text-xs text-gray-300">520</div>
          <button className="bg-white text-sky-400 rounded-full p-2">
            <FaTwitter />
          </button>
          <div className="text-xs text-gray-300">528</div>
          <button className="bg-white text-red-600 rounded-full p-2">
            <FaGoogle />
          </button>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-gray-400 text-sm">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
            dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget
            adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero
            tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.
          </p>

          <hr className="border-gray-600" />

          {/* Table of Contents */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
              Table of Contents
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-green-400">1. Nam condimentum varius justo</li>
              <li className="text-green-400">2. Faucibus nullam luctus felis pretium donec</li>
              <ul className="ml-5 list-disc text-green-300">
                <li>Trincidunt vent tellus orci aenean consectetur</li>
                <li>Eu ridiculus fringilla</li>
              </ul>
            </ul>
          </div>

          <hr className="border-gray-600" />

          {/* Blog Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Eu ridiculus fringilla aenean</h2>
            <p className="text-gray-300 text-sm">
              Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium
              metus nullam quam aenean sociis quis sem neque vel libero. Venenatis
              nullam fringilla pretium mauris aliquam nunc vulputate integer augue
              ultricies cras. Eget viverra feugiat cras sit. Sit natoque montes
              tempus ligula eget vitae pede rhoncus maecenas consectetur commodo
              condimentum aenean.
            </p>

            <div className="bg-[#1e293b] text-gray-200 p-4 mt-6 rounded-lg border-l-4 border-blue-500">
              <p>
                “Quis adipiscing ligula donec ullamcorper tellus. Id odio vulputate
                aliquam nullam vitae tincidunt semper etiam quam donec quis.”
              </p>
              <p className="mt-2 text-sm italic text-gray-400">
                — Donec Massa Integer
              </p>
            </div>

            <div className="mt-5">
                  {/* Paragraph block */}
        <p>
          Ut eu sem aenean imperdiet. Hendrerit penatibus sem adipiscing aliquet
          consequat nec orci nascetur. Etiam massa quam dolor aenean maecenas
          sociis tellus consectetur. In sit donec massa integer nisi mus viverra
          odio ultricies ridiculus. Sapien sem lorem. Aenean sem venenatis arcu
          tellus fringilla vulputate quis vici nullam nec. Cum quam veni lorem
          elit aliquet pede in enim. Quam tempus dolor sem consectetur
          ullamcorper etiam justo sed in orci eu ridiculus vitae.
        </p>

        {/* Numbered List */}
        <ol className="list-decimal pl-6 space-y-2 text-gray-100">
          <li>Mollis lorem vitae varius.</li>
          <li>
            Felis laoreet justo aenean curabitur{" "}
            <a href="#" className="text-blue-400 underline">
              donec consequat
            </a>{" "}
            sit nascetur tellus dapibus.
          </li>
          <li>Maecenas imperdiet vitae vidi vel parturient eleifend mollis eu libero.</li>
          <li>Dictum libero felis feugiat fringilla sed etiam vel sem nullam elit vitae eu.</li>
          <li>
            Felis nec eget curabitur sapien nisi aliquam pretium donec dapibus
            feugiat. Faucibus enim venenatis mus semper.
          </li>
        </ol>

        {/* Paragraph */}
        <p>
          Enim dapibus ante sapien eleifend dis vulputate quis viverra ultricies vitae eros.
          Et nunc aenean a hendrerit quisque eu viverra donec consectetur maecenas massa
          sit ultricies. Tellus ante quis vici elementum etiam.
        </p>

        {/* Highlight Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10">
          Faucibus nullam luctus felis pretium donec
        </h2>

        {/* Final paragraph */}
        <p>
          Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis
          donec cras ultricies. Eros vivamus enim nec nulla semper imperdiet
          aenean montes dictum porttitor metus.
        </p>
            </div>

{/* imagesection */}
            <div>
                  

        {/* Row 1 - 50/50 */}
        <div className="flex flex-col md:flex-row gap-5 mt-top">
          <div className="w-full md:w-1/2 overflow-hidden mt-10 rounded-lg">
            <img
              src={Img1}
              alt="Img1"
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 overflow-hidden mt-10 rounded-lg">
            <img
              src={Img2}
              alt="Img2"
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Row 2 - 80% / 20% */}
        <div className="flex flex-col mt-10 md:flex-row gap-4">
          <div className="w-full md:w-4/5 overflow-hidden rounded-lg">
            <img
              src={Img3}
              alt="Img3"
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/5 overflow-hidden rounded-lg">
            <img
              src={Img4}
              alt="Img4"
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Row 3 - 20% / 80% */}
        <div className="flex mt-10 flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/5 overflow-hidden rounded-lg">
            <img
              src={Img5}
              alt="Img5"
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-4/5 overflow-hidden rounded-lg">
            <img
              src={Img6}
              alt="Img6"
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

      </div>


{/* 
      paragraph */}

      <div>
         {/* Paragraph 1 */}
        <p className="text-gray-300 text-sm mt-10 leading-relaxed">
          Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi vici vulputate elit quis adipiscing aenean imperdiet justo varius. Vel eget luctus a sem pede sit metus nulla maecenas. Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in tellus vici ut. Tellus quam varius commodo luctus aliquam nec amet nullam quis viverra sit fringilla consectetur.
        </p>

        {/* List with Checkmarks */}
        <ul className="space-y-3 pl-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-green-400">
              <CheckCircle2 className="w-5 h-5 mt-0.5" />
              <span className="text-gray-100">{item}</span>
            </li>
          ))}
        </ul>

        {/* Paragraph 2 */}
        <p className="text-gray-300 text-sm leading-relaxed">
          Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi vici vulputate elit quis adipiscing aenean imperdiet justo varius. Vel eget luctus a sem pede sit metus nulla maecenas. Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in tellus vici ut. Tellus quam varius commodo luctus aliquam nec amet nullam quis viverra sit fringilla consectetur.
        </p>

        {/* Heading */}
        <h2 className="text-2xl text-white font-semibold border-b-2 border-blue-500 inline-block pb-1">
          Tincidunt veni tellus orci aenean consectetur
        </h2>

        {/* Paragraph 3 */}
        <p className="text-gray-300 text-sm leading-relaxed">
          Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus...
        </p>
      </div>



<div>
    
       {/* Image with rounded corners */}
        <div className="relative mt-10 mb-5">
          <img
            src={bnb1}
            alt="Crypto Coin"
            className="w-full rounded-lg"
          />
          {/* Optional icons */}
          <div className="absolute top-2 left-2 bg-white text-black p-1 rounded-full text-xs font-semibold shadow">
            📌
          </div>
          <div className="absolute top-2 right-2 bg-white text-black p-1 rounded-full text-xs font-semibold shadow">
            🔍
          </div>
        </div>

        {/* Caption */}
        <p className="italic text-gray-300 text-sm">Ut pede leo libero cum ridiculus</p>

        {/* Paragraph */}
        <p className="text-sm text-gray-400 leading-relaxed">
          Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate
          dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra.
          A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque
          sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes.
          Quis in sapien tempus.
        </p>
    
</div>


    <div>
          {/* Heading */}
        <h2 className="text-3xl font-semibold">Eu ridiculus fringilla</h2>

        {/* Intro Paragraph */}
        <p className="text-gray-300">
          Nam dictum vitae penatibus ligula id sem eget ante faucibus feugiat nascetur vel.
          Pretium vitae mus rhoncus sit maecenas quam felis orci adipiscing. Aenean parturient
          eget quam. Leo vel lorem sociis phasellus arcu dolor. Dis donec eu pede.
        </p>

        {/* 3 Column Image Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src={Img29} alt="Architecture 1" className="w-full rounded-md" />
          <img src={Img28} alt="Architecture 2" className="w-full rounded-md" />
          <img src={Img30} alt="Architecture 3" className="w-full rounded-md" />
        </div>

        {/* Additional Paragraphs */}
        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
          <p>
            Venenatis ante veni nullam ridiculus penatibus <a href="#" className="text-blue-400 underline">vidi eu consectetur</a> integer.
            Vulputate ipsum lorem nascetur rhoncus. Aliquam vitae elit blandit enim eget laoreet.
            Dapibus leo sociis quis nulla adipiscing amet integer sem ullamcorper in maecenas eu imperdiet.
          </p>
          <p>
            Ante blandit amet ultricies ut in et nam massa rhoncus. Eget eu massa nisi quis viverra dapibus aliquam.
            Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque.
          </p>
          <p>
            Maecenas tempus aenean nulla viverra neque vel nec cras justo sapien condimentum ut varius.
            Blandit sem etiam vel nullam vulputate sociis amet varius dolor. Vitae a ut. Etiam rhoncus ante sit.
            Nisi nullam donec dui eu phasellus a elementum elit faucibus nec. Eros eu pulvinar pede luctus sit aenean lorem.
          </p>
        </div>
    </div>


    <div className="mt-10">
         {/* Social Sharing Row */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-center text-sm">
            <div className="text-lg font-bold">10K</div>
            <div className="text-gray-400">Shares</div>
          </div>

          <button className="bg-[#3b5998] text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
            <FaFacebookF />
            <span>Shares 636</span>
          </button>

          <button className="bg-[#dd4b39] text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
            <FaPinterestP />
            <span>Shares 636</span>
          </button>

          <button className="bg-[#0077b5] text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
            <FaLinkedinIn />
            <span>in 636</span>
          </button>
        </div>

        {/* Author Info */}
        <div className="flex flex-col sm:flex-row mt-5 items-start gap-4">
          <img
            src={Ellipse}
            alt="Author"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold">Luci Avetisyan</h3>
            <p className="text-sm text-gray-400">
              Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel
              nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.
            </p>

            {/* Icons */}
            <div className="flex gap-3 mt-2 text-gray-300 text-lg">
              <FaQuoteLeft className="hover:text-white cursor-pointer" />
              <BiComment className="hover:text-white cursor-pointer" />
              <FaPinterestP className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* View Comments Button */}
        <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded text-sm">
          View Comments (0)
        </button>
    </div>


    <div
  className="bg-gray-900 mt-10 bg-center text-white p-8 md:p-16"
  style={{ backgroundImage: `url(${Rectangle11})` }}
>
  <div className="max-w-4xl mx-auto">
    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-semibold mb-2">
      Sign Up for Our Newsletters
    </h2>
    <p className="text-sm md:text-base text-gray-300 mb-6">
      Get notified of the best deals on our WordPress themes.
    </p>

    {/* Input + Button */}
    <div className="flex items-center w-full mb-4 bg-white rounded overflow-hidden">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 text-black outline-none"
      />
      <button className="bg-gray-300 text-black px-4 py-3 font-semibold hover:bg-gray-400">
        ➤
      </button>
    </div>

    {/* Checkbox */}
    <div className="flex items-start space-x-2 text-xs text-gray-300">
      <input type="checkbox" className="mt-1" />
      <p>
        By checking this box, you confirm that you have read and are agreeing to our
        <span className="underline mx-1">terms of use</span>
        regarding the storage of the data submitted through this form.
      </p>
    </div>
  </div>
</div>



<div>
  <h2 className="text-xl md:text-2xl font-semibold mb-6">YOU MAY ALSO LIKE</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Integer Maecenas Eget Viverra.",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        date: "June 21, 2022",
        tags: ["Aenean Eleifend", "Aliquam"],
        readTime: "2 minute read",
      },
      {
        title: "Integer Maecenas Eget Viverra.",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        date: "June 21, 2022",
        tags: ["Aenean Eleifend", "Aliquam"],
        readTime: "2 minute read",
      },
      {
        title: "Integer Maecenas Eget Viverra.",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        date: "June 21, 2022",
        tags: ["Aenean Eleifend", "Aliquam"],
        readTime: "2 minute read",
      },
         {
        title: "Integer Maecenas Eget Viverra.",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        date: "June 21, 2022",
        tags: ["Aenean Eleifend", "Aliquam"],
        readTime: "2 minute read",
      },
      
      {
        title: "Integer Maecenas Eget Viverra.",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        date: "June 21, 2022",
        tags: ["Aenean Eleifend", "Aliquam"],
        readTime: "2 minute read",
      },
      {
        title: "Integer Maecenas Eget Viverra.",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        date: "June 21, 2022",
        tags: ["Aenean Eleifend", "Aliquam"],
        readTime: "2 minute read",
      },
    ].map((post, idx) => (
      <div key={idx} className="bg-[#0D1025]">
        <div className="relative">
          <img
            src={postImage}
            alt="Blog"
            className="w-full h-56 object-cover rounded"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-black text-xs font-semibold px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-lg  p-1 font-bold mt-4">{post.title}</h3>
        <p className="text-sm p-1 text-gray-300 mt-1">{post.excerpt}</p>
        <div className="flex p-1 items-center text-xs text-gray-400 mt-3 space-x-3">
          <span>{post.date}</span>
          <span>—</span>
          <span className="flex p-1  items-center gap-1">
            <BiComment /> {post.readTime}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
         
          </div>
        </div>

        {/* Social Links */}
        <div className="lg:col-span-4">
          <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-4">
            Social Links
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {socialStats.map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="bg-white text-[#0f172a] p-2 rounded-full text-base">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white">{item.label}</p>
                  <p className="text-gray-400">{item.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




