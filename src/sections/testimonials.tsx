"use client";

import React from "react";

const Testi = () => {
  return (
    <div className="flex items-center justify-center p-5 mt-10 mb-10">
      <div className="font-sans mr-5">
        <h5 className="text-xl font-bold mb-4 ">Why Our Client Choose Minha Nails?</h5>
        <h2 className="font-helvetica">
          Kami menawarkan berbagai pilihan nail art yang sesuai dengan tren
          terkini yang siap memanjakan Anda!
        </h2>
        <div className="pt-5">
        <a href="#" 
        className=" hover:text-blue-500 border border-black rounded p-3">
          See More
        </a>
        </div>
      </div>
      <div>
        <img 
        src="https://plus.unsplash.com/premium_photo-1723568625524-4101dee5991c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="rounded-md shadow-md"
        />
      </div>
      
    </div>
  );
};

export default Testi;