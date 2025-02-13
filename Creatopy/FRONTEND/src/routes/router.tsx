import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Page/Landingpage";
import Product from "../Page/Product";
import Solutions from "../Page/Solutions";
import Resources from "../Page/Resources";
import Company from "../Page/Company";
import Pricing from "../Page/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "/Product", element: <Product /> },
      { path: "/Solutions", element: <Solutions /> },
      { path: "/Resources", element: <Resources /> },
      { path: "/Company", element: <Company /> },
      { path: "/Pricing", element: <Pricing /> },
    ],
  },
]);
