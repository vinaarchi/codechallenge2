"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";
import Image from "next/legacy/image";

const Navbar = () => {
  //buat state toggle menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //buat fungsi toggle menu nya
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // ini buat fungsi toggle x nya buat close
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="shadow-md z-10 relative w-full py-3">
      <div className="flex justify-evenly items-center space-x-60">
        <div className="flex items-center">
          {/* <img src="/logo.png" className="relative h-14 md:h-20 w-14 md:w-14" /> */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="relative"
          />
        </div>

        {/* icon ini bakalan muncul hanya di layar kecil */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className="text-lg" />
          </button>
        </div>

        {/* ini buat dia muncul terus bagian Home dll nya */}
        <div className="hidden md:flex flex-row items-center space-x-8 font-rafeny text-black">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="hover:text-customDarkBlue">
                Home
              </Link>
            </li>
            <li>
              <a href="./AboutUs" className="hover:text-customDarkBlue">
                About
              </a>
            </li>
            <li>
              <a
                href="./Products&Program"
                className="hover:text-customDarkBlue"
              >
                Products & Programs
              </a>
            </li>
            <li>
            <a href="./Testimonial" className="hover:text-customDarkBlue">
                Testimonial
              </a>
            </li>
            <li>
              <a href="./OurTeam" className="hover:text-customDarkBlue">
                Our Team
              </a>
            </li>
            <li>
              <a href="./ContactUs" className="hover:text-customDarkBlue">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* ini buat menu navigasinya */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out`}
        >
          {/* ini buat tombol Closenya */}
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <IoMdCloseCircle />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center space-y-8 p-8 font-rafeny text-black">
            <li>
              <Link href="/" className="hover:text-customDarkBlue">
                Home
              </Link>
            </li>
            <li>
              <a href="./AboutUs" className="hover:text-customDarkBlue">
                About
              </a>
            </li>
            <li>
              <a
                href="./Products&Program"
                className="hover:text-customDarkBlue"
              >
                Products & Programs
              </a>
            </li>
            <li>
              <a href="./Testimonial" className="hover:text-customDarkBlue">
                Testimonial
              </a>
            </li>
            <li>
              <a href="./OurTeam" className="hover:text-customDarkBlue">
                Our Team
              </a>
            </li>
            <li>
              <a href="./ContactUs" className="hover:text-customDarkBlue">
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
