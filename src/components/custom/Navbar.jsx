import { React, useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import CartDrawer from "./CartDrawer";
import LogoutToggle from "./LogoutToggle";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { User } from "lucide-react";

export default function Navbar() {
  const {isAuthenticated ,user} = useSelector((state)=>state.auth)

  return (
    <nav className="sticky top-0 w-full bg-slate-100 dark:bg-gray-900 z-50 flex justify-between items-center px-4 sm:m-0 lg:px-8 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-800 shadow-md dark:shadow-slate-800">
      {/* Left Section: Toggle & Cart */}
      <div className="flex items-center gap-4 px-3">
        <ModeToggle />
        <CartDrawer />
        {isAuthenticated ? (
          <LogoutToggle user={user}/>
        ) : (
          <Link to="/login">
            <User className="cursor-pointer hover:scale-110 transition-all ease-out" />
          </Link>
        )}
      </div>

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black dark:text-white">
        CTM Store
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-4 text-lg px-3">
        <Link
          to="/"
          className="hover:scale-105 transition-all ease-in-out cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400"
        >
          <Button variant="outline">About</Button>
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all ease-in-out cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400"
        >
          <Button variant="outline">Contact</Button>
        </Link>
      </ul>
    </nav>
  );
}
