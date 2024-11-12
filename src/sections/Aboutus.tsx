import React from "react";
import { Button } from "@/components/ui/button";

const About = () => (
  <div className="flex flex-col md:flex-row items-center justify-center p-5 mt-10 mb-10">
    {/* Gambar dan Overlay untuk Mobile */}
    <div className="relative w-full md:w-1/2 h-auto rounded-md shadow-md">
      <img
        src="/images/2aboutus_11zon.webp"
        className="rounded-md shadow-md h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
      />
      {/* Teks untuk Mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white md:hidden">
        <h3 className="font-rafeny text-4xl font-bold">About Us</h3>
        <div className="pt-5">
          <a href="./AboutUs">
            <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
              Read More
            </Button>
          </a>
        </div>
      </div>
    </div>

    {/* Konten untuk Desktop */}
    <div className="md:w-1/2 md:flex md:justify-start md:items-center text-center md:text-left">
      <div className="md:pl-10">
        {/* Teks untuk Desktop */}
        <h3 className="font-rafeny text-3xl pb-2 font-bold hidden md:block text-customPink">
          About Us
        </h3>
        <h1 className="font-helvetica text-lg md:text-xl mb-4 hidden md:block">
          Perjalanan kami telah ditandai dengan banyak pelanggan yang puas,
          desain inovatif, dan komitmen terhadap kualitas
        </h1>
        <div className="pt-1 font-helvetica hidden md:block">
          <a href="./AboutUs">
            <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
              Read More
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
