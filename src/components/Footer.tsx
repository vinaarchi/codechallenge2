import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center text-center p-10 space-x-40"
      style={{ backgroundColor: "rgb(237, 218, 212)" }}
    >
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-start items-center">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <div className="text-center pl-8">
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-customDarkBlue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="./Aboutus" className="hover:text-customDarkBlue">
                  About
                </Link>
              </li>
              <li>
                <a href="./products" className="hover:text-customDarkBlue">
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center pl-16">
            <ul className="space-y-3">
              <li>
                <Link
                  href="./testimonial"
                  className="hover:text-customDarkBlue"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <a href="./Ourteam" className="hover:text-customDarkBlue">
                  Our Team
                </a>
              </li>
              <li>
                <a href="./contactus" className="hover:text-customDarkBlue">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <p className="font-rafeny text-center hidden md:block">
          &quot;We don&quot;t keep our beauty secrets&quot;
        </p>
      </div>
    </div>
  );
};

export default Footer;
