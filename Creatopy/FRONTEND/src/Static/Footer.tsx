import creatopy from "../assets/Screenshot 2024-10-08 164246.png";
import fb from "../assets/facebook.svg";
import ins from "../assets/instagram.svg";
import x from "../assets/twitter.svg";
import ink from "../assets/Linkin.svg";
import yt from "../assets/Youtube.svg";
import pi from "../assets/pinrest.svg";

import { BiGlobe } from "react-icons/bi";

const Footer = () => {
  const creat = [
    {
      id: 1,
      img: <img src={creatopy} alt="" className="w-[120px] h-[60px]" />,
    },
    {
      id: 2,
      title:
        "Your AI-powered creative partner. Build, personalize, and optimize ad campaigns across all channels, at scale.",
    },
  ];
  const company = [
    {
      id: 1,
      com: "Company",
    },
    {
      id: 2,
      title: "About us",
    },
    {
      id: 3,
      title: "Careers",
    },
    {
      id: 4,
      title: "Press",
    },
    {
      id: 5,
      title: "Security",
    },
    {
      id: 6,
      title: "Contact",
    },
  ];

  const Product = [
    {
      id: 1,
      prd: "Product",
    },
    {
      id: 2,
      title: "Pricing",
    },
    {
      id: 3,
      title: "Tools",
    },
    {
      id: 4,
      title: "Product updates",
    },
    {
      id: 5,
      title: "Templates",
    },
    {
      id: 6,
      title: "Gallery",
    },
  ];
  const support = [
    {
      id: 1,
      srp: "Support",
    },
    {
      id: 2,
      title: "Help",
    },
    {
      id: 3,
      title: "Terms of Services",
    },
    {
      id: 4,
      title: "AI user Policy",
    },
    {
      id: 5,
      title: "Privacy",
    },
    {
      id: 6,
      title: "Cookies Management",
    },
    {
      id: 7,
      title: "Abuse",
    },
  ];
  const copy = [
    {
      id: 1,
      title: "Copyright © 2024 Creatopy. All rights reserved",
    },
  ];

  const icons = [
    {
      id: 1,
      iconic: <img src={fb} alt="" className="" />,
    },
    {
      id: 2,
      iconic: <img src={ins} alt="" />,
    },
    {
      id: 3,
      iconic: <img src={x} alt="" />,
    },
    {
      id: 4,
      iconic: <img src={ink} alt="" />,
    },
    {
      id: 5,
      iconic: <img src={yt} alt="" />,
    },
    {
      id: 6,
      iconic: <img src={pi} alt="" />,
    },
  ];
  return (
    <div className="w-[100%] h-[80vh] flex flex-col justify-center items-center ">
      <div className="w-[75%] justify-between items-center h-[80%] flex">
        <div className="w-[30%] h-[100%] flex flex-col">
          {creat.map((el) => (
            <div className="flex ">
              {el.img}
              <div className="w-[90%]  font-semibold text-[#9A9490] ml-4 mt-2">
                {el.title}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[60%] h-[100%] flex justify-around cursor-pointer hover:decoration-red-500">
          <a href="#" className="hover:underline">
            {company.map((el) => (
              <div className="flex flex-col ">
                <p className="font-semibold mb-5 text-[15px]"> {el.com}</p>
                <p className="font-normal text-[#9A9490]"> {el.title}</p>
              </div>
            ))}
          </a>
          <div>
            {Product.map((el) => (
              <div className="flex flex-col ">
                <p className="font-semibold mb-5 text-[15px]"> {el.prd}</p>
                <p className="font-normal text-[#9A9490]"> {el.title}</p>
              </div>
            ))}
          </div>
          <div>
            {support.map((el) => (
              <div className="flex flex-col ">
                <p className="font-semibold mb-5 text-[15px]"> {el.srp}</p>
                <p className="font-normal text-[#9A9490]"> {el.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#E5E5E5] " />
      <div className="w-[75%] h-[20%] flex justify-around items-center">
        <div>
          {copy.map((el) => (
            <div>{el.title}</div>
          ))}
        </div>
        <div className="flex gap-5 cursor-pointer">
          {icons.map((el) => (
            <div className="">{el.iconic}</div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          English <BiGlobe size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
