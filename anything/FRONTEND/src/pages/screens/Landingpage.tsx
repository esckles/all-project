import React, { useState } from "react";

const Landingpage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <div className="w-full h-[80vh] p-10">
        <button
          className="w-[70px] h-[40px] rounded-md text-white text-center bg-black"
          onClick={() => setToggle(!toggle)}
        >
          Click me
        </button>
        {toggle && <div className="w-[90%] h-[70%] bg-slate-300 fixed"></div>}
      </div>
    </div>
  );
};

export default Landingpage;
