import { Link } from "react-router-dom";
import creatopy from "../assets/Screenshot 2024-10-08 164246.png";
import caret from "../assets/caret.svg";
import { useState } from "react";
import Button from "../component/Button";

const Header = () => {
  const logo = [
    {
      id: 1,
      img1: <img src={creatopy} alt="" className="w-[120px] h-[60px]" />,
      url: "/",
      title: "/Landingpage",
    },
  ];
  const [navs] = useState([
    {
      id: 2,
      title: "Product",

      url: "/Product",
    },
    {
      id: 3,
      title: "Solutions",

      url: "/Solutions",
    },
    {
      id: 4,
      title: "Resources",

      url: "/Resources",
    },
    {
      id: 5,
      title: "Company",

      url: "/Company",
    },
    {
      id: 6,
      title: "Pricing",

      url: "/Pricing",
    },
  ]);
  return (
    <div className="w-[100%] border h-[80px] flex items-center justify-center fixed bg-white ">
      <div className="w-[75%] h-[100%] flex justify-center items-center">
        <div className="w-[60%] h-[100%] flex justify-around items-center gap-4">
          {logo.map((el) => (
            <div className="w-[1000px]">
              <Link to={el.url}>{el.img1}</Link>
            </div>
          ))}

          {navs.map((el) => (
            <div className="flex justify-center  items-center w-[100%] h-[100%] ">
              <div className="flex justify-center items-center gap-1 text-[15px]">
                <Link className=" font-normal" to={el.url}>
                  {el.title}
                </Link>
                <img src={caret} alt="" className="w-[18px] h-[8px] mt-1" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] h-[100%] flex gap-4 items-center justify-center ">
          <div className="w-[1px] h-[50px] bg-[#E5E5E5]" />
          <p className="font-normal text-[14px]">Sign in</p>
          <div className="flex gap-3">
            <Button title="Book a demo" />

            <div className="bg-[#005BE5] text-white text-[10px] rounded-md">
              <Button title="Start free trial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
