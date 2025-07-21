import React from "react";
import { Button } from "../ui/button"; 
import { Input } from "../ui/input"; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-slate-150 dark:bg-gray-900 text-white py-12 border-t-2">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg text-black font-semibold mb-4 dark:text-white">About Us</h3>
            <p className="text-gray-400 hover:text-black dark:hover:text-white transition-all ease-in-out">
              We are a company dedicated to providing the best products and
              services to our customers. Our mission is to make your life easier
              and more enjoyable.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 dark:hover:text-white  hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:hover:text-white hover:text-black" >
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:hover:text-white hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:hover:text-white hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4 dark:hover:text-white hover:text-black">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-black border-gray-700 text-white"
              />
              <Button className="bg-blue-800 hover:bg-blue-600">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-5 pt-5 text-center ">
          <p className="text-gray-400 dark:text-white text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}