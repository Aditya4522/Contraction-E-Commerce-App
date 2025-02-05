import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Correct import
import { ThemeProvider } from "@/components/Theme/theme-provider"
import Home from "./Pages/Home";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";



export default function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      
      element:(
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>
      )
    },
    {
      path: "/signup",
      
      element:(
        <>
        <Navbar/>
        <SignUp/>
        <Footer/>
        </>
      )
    },
    {
      path: "/login",
      
      element:(
        <>
        <Navbar/>
        <Login/>
        <Footer/>
        </>
      )
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
    <RouterProvider router={router}/>
    </ThemeProvider>
  )


}
