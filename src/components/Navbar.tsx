"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="flex justify-evenly items-center max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.png" className="position: relative h-20 mr-8" />
        </div>
        <div>
          <ul className="flex space-x-20 font-helvetica text-black">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
