import payout from '../assets/home/payout.png';
import integration from '../assets/home/integration.png';
import security from '../assets/home/security.png';
import cryptocurrency from '../assets/home/cryptocurrency.png';
import protection from '../assets/home/protection.png';
import support from '../assets/home/support.png';
import { FaHome, FaMicroblog, FaProductHunt, FaUser } from 'react-icons/fa';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { MdMiscellaneousServices } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';


export const sidebarData = [
    { icon: <FaHome />, title: "Home", link: "/" },
    { icon: <FaCircleDollarToSlot />, title: "Pricing", link: "/pricing" },
    { icon: <MdMiscellaneousServices />, title: "Services", link: "/service" },
    { icon: <FaProductHunt />, title: "Products", link: "/product" },
    { icon: <FaMicroblog />, title: "Blog", link: "/blog" },
    { icon: <BiSolidContact />, title: "Contact", link: "/contact" },
]


export const productCardData = [
    { contract: '919', crypto: 'Bitcoin', expiry: '01 Year', price: '$4.20' },
    { contract: '149', crypto: 'Ethereum', expiry: '01 Year', price: '$4.20' },
    { contract: 'A40', crypto: 'Litecoin', expiry: '01 Year', price: '$4.20' },
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
        pointOne: "As the world of cryptocurrencies continues to evolve, Bitcoin mining offers a unique opportunity to be part of the blockchain revolution while potentially reaping substantial",
        pointTwo: "Cloud mining is the easiest and most efficient way to earn money from cryptocurrency"
    },
    {
        title: "Best cloud mining ",
        subTitle: "service with",
        pointOne: "In the rapidly evolving landscape of cryptocurrency, cloud mining has emerged as an enticing solution for individuals seeking to participate in hardware setup and maintenance.",
        pointTwo: "Among the various options available, one service stands out as a leader in the realm of cloud mining."
    },
    {
        title: "Receive daily your",
        subTitle: " mind bitcoins",
        pointOne: "Imagine waking up every day to a stream of Bitcoin rewards flowing directly into your digital wallet. With our advanced cloud mining service, you can turn this reality.",
        pointTwo: "We’re excited to introduce a seamless and secure way for you to daily Bitcoin mining rewards"
    },
]




