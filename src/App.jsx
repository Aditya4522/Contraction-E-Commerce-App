import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { Toaster } from "sonner";
import ProtectedRoute from "./components/custom/ProtectedRoute";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout children={<Home />} />,
    },

    {
      path: "/signup",
      element: (
        <ProtectedRoute requiredRole="user">
          <Rootlayout children={<SignUp />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",

      element: (
        <ProtectedRoute>
          <Rootlayout children={<Login />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/product/:id",

      element: <Rootlayout children={<Product />} />,
    },
    {
      path: "/checkout",

      element: (
        <ProtectedRoute requiredRole="user">
          <Rootlayout children={<Checkout />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/orders",

      element: (
        <ProtectedRoute requiredRole="user">
          <Rootlayout children={<Myorders />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/login",

      element: (
        <ProtectedRoute requiredRole="admin">
          <Rootlayout children={<AdminLogin />} />
        </ProtectedRoute>
      ),
    },
    // Admin routes go here
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminRoot>
            <CreateProducts />
          </AdminRoot>
        </ProtectedRoute>
      ),
    },

    {
      path: "/admin/dashboard/all-products",

      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminRoot children={<AllProducts />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/orders",

      element: (
        <ProtectedRoute>
          <AdminRoot children={<Orders />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/settings",

      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminRoot children={<Settings />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/analytics",

      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminRoot children={<Analytics />} /> requiredRole="admin"
        </ProtectedRoute>
      ),
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
        <Toaster />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}
