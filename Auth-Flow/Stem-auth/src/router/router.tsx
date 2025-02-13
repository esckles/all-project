import Layout from "@/layout/Layout";
import LandingPage from "@/pages/design/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import RegisterPage from "@/pages/Auth/RegisterPage";
import LoginPage from "@/pages/Auth/LoginPage";
import Und from "@/pages/Auth/und";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "Und",
        element: <Und />,
      },
    ],
  },
]);
