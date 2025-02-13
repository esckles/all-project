import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Register from "../pages/Auth/Register";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Register />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
