import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex p-5" style={{ backgroundColor: "rgb(225, 219, 219)" }}>
      <div className="flex flex-col p-4 w-1/4 justify-center">
        <div className="flex flex-row p-5 justify-start items-center">
          
          <Image 
          src="/logo.png"
          alt="logo"
          width={500}
          height={300}
          />
          <ul className="flex flex-col items-start space-y-2 mt-4 ml-8 md:ml-20">
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
              <a href="./Products" className="hover:text-customDarkBlue">
                Product & Program
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col p-4 w-1/3 justify-center ml-24 md:ml-44">
        <ul className="flex flex-col items-start space-y-2 mt-4">
          <li>
            <a href="./OurTeam" className="hover:text-customDarkBlue">
              Team
            </a>
          </li>
          <li>
            <a href="./Testimonial" className="hover:text-customDarkBlue">
              Testimonials
            </a>
          </li>
          <li>
            <a href="./ContactUs" className="hover:text-customDarkBlue">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Kolom 3: Quote */}
      <div className="flex flex-col justify-center items-center p-4 w-1/2">
        <p className="font-rafeny text-center hidden md:block">
          &quot;We don&quot;t keep our beauty secrets&quot;
        </p>
      </div>
    </div>
  );
};

export default Footer;
