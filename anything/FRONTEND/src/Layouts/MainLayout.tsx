import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Landingpage from "../pages/screens/Landingpage";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Landingpage />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
