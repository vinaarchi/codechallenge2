import React from "react";
import { Button } from "@/components/ui/button";

const About = () => (
  <div className="flex flex-col md:flex-row items-center justify-center p-5 mt-10 mb-10">
    {/* Gambar dan Overlay untuk Mobile */}
    <div className="relative w-full md:w-1/2 h-auto rounded-md shadow-md">
      <img
        src="https://plus.unsplash.com/premium_photo-1706382233749-56562cdcaf60?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="rounded-md shadow-md h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
      />
      {/* Teks untuk Mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white md:hidden">
        <h3 className="font-rafeny text-4xl font-bold">About Us</h3>
        <div className="pt-5">
          <Button className="bg-blue-400 font-rafeny ">Read More</Button>
        </div>
      </div>
    </div>

    {/* Konten untuk Desktop */}
    <div className="md:w-1/2 md:flex md:justify-start md:items-center text-center md:text-left">
      <div className="md:pl-10">
        {/* Teks untuk Desktop */}
        <h3 className="font-rafeny text-4xl font-bold hidden md:block">
          About Us
        </h3>
        <h1 className="font-helvetica text-lg md:text-xl mb-4 hidden md:block">
          Perjalanan kami telah ditandai dengan banyak pelanggan yang puas,
          desain inovatif, dan komitmen terhadap kualitas
        </h1>
        <div className="pt-5 font-helvetica hidden md:block">
          <Button className="bg-blue-400 font-rafeny">Read More</Button>
        </div>
      </div>
    </div>
  </div>
);

export default About;
