import React from "react";

import data from "./Data.json";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/auth");
  };

  return (
    <div className="">
      <div className="w-full h-[100px]  flex items-center justify-center ">
        <div className="w-[90%] h-[100%] flex items-center justify-between">
          {data.map((el) => (
            <div>
              <p className="ml-10 font-semibold"> {el.title}</p>
              <button className="mr-10 font-semibold" onClick={handleSignIn}>
                {el.title2}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
