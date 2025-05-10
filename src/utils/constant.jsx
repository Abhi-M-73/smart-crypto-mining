import payout from "../assets/home/payout.png";
import integration from "../assets/home/integration.png";
import security from "../assets/home/security.png";
import cryptocurrency from "../assets/home/cryptocurrency.png";
import protection from "../assets/home/protection.png";
import support from "../assets/home/support.png";
import { FaHome, FaMicroblog, FaProductHunt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.png";
import cpu from "../assets/product/cpu.png";
import gpu from "../assets/product/gpu.png";
import { Cpu } from "lucide-react";

export const sidebarData = [
  { icon: <FaHome />, title: "Home", link: "/" },
  { icon: <FaProductHunt />, title: "Products", link: "/product" },
  { icon: <FaMicroblog />, title: "Blog", link: "/blog" },
  { icon: <BiSolidContact />, title: "Contact", link: "/contact" },
];

export const productCardData = [
  { contract: "919", crypto: "Bitcoin", expiry: "01 Year", price: "$4.20" },
  { contract: "149", crypto: "Ethereum", expiry: "01 Year", price: "$4.20" },
  { contract: "A40", crypto: "Litecoin", expiry: "01 Year", price: "$4.20" },
];

export const serviceCardData = [
  { img: payout, title: "Instant Payout" },
  { img: integration, title: "Internal Integration" },
  { img: security, title: "Granted Security" },
  { img: cryptocurrency, title: "Multiple Cryptocurrencies" },
  { img: protection, title: "Data Protection" },
  { img: support, title: "Expert Support Team" },
];

export const featuresCardData = [
  {
    title: "Start build you",
    subTitle: "Career",
    pointOne:
      "As the world of cryptocurrencies continues to evolve, Bitcoin mining offers a unique opportunity to be part of the blockchain revolution while potentially reaping substantial",
    pointTwo:
      "Cloud mining is the easiest and most efficient way to earn money from cryptocurrency",
  },
  {
    title: "Best cloud mining ",
    subTitle: "service with",
    pointOne:
      "In the rapidly evolving landscape of cryptocurrency, cloud mining has emerged as an enticing solution for individuals seeking to participate in hardware setup and maintenance.",
    pointTwo:
      "Among the various options available, one service stands out as a leader in the realm of cloud mining.",
  },
  {
    title: "Receive daily your",
    subTitle: " mind bitcoins",
    pointOne:
      "Imagine waking up every day to a stream of Bitcoin rewards flowing directly into your digital wallet. With our advanced cloud mining service, you can turn this reality.",
    pointTwo:
      "We’re excited to introduce a seamless and secure way for you to daily Bitcoin mining rewards",
  },
];

export const earnCardData = [
  { img: img1, title: "Gamming PC", price: "$99/ $79.00" },
  { img: img2, title: "Mining RIG", price: "$299/ $189.00" },
  { img: img3, title: "Mining Farm", price: "$299/ $199.00" },
];

export const faqs = [
  {
    question: "How does it work?",
    answer: "Bitcoin mining is the process by which new bitcoins are created and added to the circulating supply. It also serves as the mechanism through which transactions are",
  },
  {
    question: "How to withdraw my income?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
  },
  {
    question: "Do I need to purchase equipment?",
    answer: "You can use the useState hook to manage component state in React.",
  },
  {
    question: "Can I open multiple accounts in your program?",
    answer: "You can use the useState hook to manage component state in React.",
  },
  {
    question: "Do you charge withdrawal fees?",
    answer: "You can use the useState hook to manage component state in React.",
  },
  {
    question: "How does the affiliate program work?",
    answer: "You can use the useState hook to manage component state in React.",
  },
];




// productData

export const dealCardData = [
  { img: cpu, power: "500 W", processor: "300 MH/s", title: "Iceriver AE1 Lite Aleo Miner (300Mh)", price: "US$3,149.00" },
  { img: gpu, power: "72 W", processor: "4.8T H/s", title: "NerdMiner NerdQaxe++ Bitcoin Miner", price: "US$520.00" },
  { img: cpu, power: "500 W", processor: "300 MH/s", title: "Iceriver AE1 Lite Aleo Miner (300Mh)", price: "US$3,149.00" },
];


export const featuredProductCardData = [
  { img: cpu, power: "500 W", processor: "300 MH/s", title: "Iceriver AE1 Lite Aleo Miner (300Mh)", price: "US$3,149.00" },
  { img: gpu, power: "72 W", processor: "4.8T H/s", title: "NerdMiner NerdQaxe++ Bitcoin Miner", price: "US$520.00" },
  { img: cpu, power: "500 W", processor: "300 MH/s", title: "Iceriver AE1 Lite Aleo Miner (300Mh)", price: "US$3,149.00" },
];
