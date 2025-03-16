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
import Orders from "./components/custom/Orders";
import Settings from "./components/custom/Settings";
import Analytics from "./components/custom/Analytics";
import { Provider } from "react-redux";
import { store } from "@/redux/Store";
import Myorders from "./Pages/Myorders";

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
      path: "/orders",

      element: <Rootlayout children={<Myorders />} />,
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
      path: "/admin/dashboard/orders",

      element: <AdminRoot children={<Orders/>} />,
    },
    {
      path: "/admin/dashboard/settings",

      element: <AdminRoot children={<Settings/>} />,
    },
    {
      path: "/admin/dashboard/analytics",

      element: <AdminRoot children={<Analytics/>} />,
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
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}
