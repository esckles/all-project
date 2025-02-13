import React from "react";
import Sider from "../static/Sider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="border rounded-md m-4 h-[95vh] overflow-hidden">
      <div className="fixed w-[300px] h-[94.8vh] rounded-bl-md border-r ">
        <Sider />
      </div>
      <div className="flex h-full w-full justify-end">
        <div className="h-full w-[calc(100vw-350px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
