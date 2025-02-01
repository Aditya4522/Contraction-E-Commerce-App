import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Correct import
import { ThemeProvider } from "@/components/Theme/theme-provider"
import Home from "./Pages/Home";
import Navbar from "./components/custom/Navbar";

export default function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      
      element:(
        <>
        <Navbar/>
        <Home/>
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
