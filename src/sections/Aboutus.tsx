"use client";

import React from "react";

const About = () => {
  return (
    <div className="flex items-center p-5 mt-10 mb-10">
      <div className="h-auto mr-10 rounded-md shadow-md">
        <img 
        src="https://plus.unsplash.com/premium_photo-1706382233749-56562cdcaf60?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className="rounded-md shadow-md"
        />
      </div>
      <div>
        <h3 className="font-rafeny text-xl font-bold ">About Us</h3>
        <h1 className="font-helvetica">
          Perjalanan kami telah ditandai dengan banyak pelanggan yang puas,
          desain inovatif, dan komitmen terhadap kualitas
        </h1>
        <div className="pt-5 font-helvetica">
        <a href="#" 
        className=" hover:text-blue-500 border border-black rounded p-3">
          Read More
        </a>
        </div>
      </div>
    </div>
  );
};

export default About;
