import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import CartDrawer from "./CartDrawer";
import { User } from "lucide-react";
import LogoutToggle from "./LogoutToggle";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <nav className="flex justify-between items-center px-5 py-3 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-md dark:shadow-slate-800">
      {/* Left Section: Toggle & Cart */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <CartDrawer  />
        {
          isAuthenticated ? ( 
           <LogoutToggle/>
          ): (
            <Link to={'/login'}>
              <User className=" cursor-pointer  hover:scale-110 transition-all ease-out "/>
            </Link>
          )
        }
      </div>

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black dark:text-white">
        CTRC Store
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-4 text-lg">
        <Link
          to="/"
          className="hover:scale-105 transition-all ease-in-out cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400"
        >
          About
        </Link>
        <Link
          to="/"
          className= "hover:scale-105 transition-all ease-in-out cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
