"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-center">
      <hr className="my-4" />
      <div>
        <ul className="flex flex-col justify-center space-x-6">
          <li>
            <a href="#" className="text-blue-600 hover:underline">About</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Products</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Program</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
