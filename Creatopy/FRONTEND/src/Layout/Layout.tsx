import { Outlet } from "react-router-dom";
import Header from "../Static/Header";
import Footer from "../Static/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
