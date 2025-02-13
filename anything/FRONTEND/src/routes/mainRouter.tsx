import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";

import MainLayout from "../Layouts/MainLayout";
import Landingpage from "../pages/screens/Landingpage";
import Register from "../pages/Auth/Register";

export const mainRouter = createBrowserRouter([
  {
    path: "/Auth",
    element: <AuthLayout />,
    children: [
      {
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Landingpage />,
      },
    ],
  },
]);
