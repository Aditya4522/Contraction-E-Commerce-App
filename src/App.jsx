import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Correct import
import { ThemeProvider } from "@/components/Theme/theme-provider";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import AdminLogin from "./Pages/AdminLogin";
import Error from "./Pages/Error";
import Success from "./Pages/Success";
import Rootlayout from "./layouts/RootLayout";
import AdminRoot from "./layouts/AdminRoot";
import CreateProducts from "./components/custom/CreateProducts";
import AllProducts from "./components/custom/AllProducts";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout children={<Home />} />,
    },

    {
      path: "/signup",
      element: <Rootlayout children={<SignUp />} />,
    },
    {
      path: "/login",

      element: <Rootlayout children={<Login />} />,
    },
    {
      path: "/product",

      element: <Rootlayout children={<Product />} />,
    },
    {
      path: "/checkout",

      element: <Rootlayout children={<Checkout />} />,
    },
    {
      path: "/admin/login",

      element: <Rootlayout children={<AdminLogin />} />,
    },
     // Admin routes go here
    {
      path: "/admin/dashboard",

      element: <AdminRoot children={<CreateProducts/>} />,
    },
    {
      path: "/admin/dashboard/all-products",

      element: <AdminRoot children={<AllProducts/>} />,
    },
 
    {
      path: "/success",

      element: <Rootlayout children={<Success />} />,
    },

    {
      path: "/*",

      element: <Rootlayout children={<Error />} />,
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
