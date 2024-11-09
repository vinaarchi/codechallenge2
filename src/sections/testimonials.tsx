"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Testi = () => {
  return (
    <div className="flex items-center justify-center p-5 mt-10 mb-10">
      {/* ini fungsi untuk bagian Dekstop */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="mr-5 md:w-1/2">
          <h5 className="text-xl font-bold mb-4 font-rafeny">
            Why Our Client Choose Minha Nails
          </h5>
          <h2 className="font-helvetica mb-4">
            Kami menawarkan berbagai pilihan nail art yang sesuai dengan tren
            terkini yang siap memanjakan Anda!
          </h2>
          <div className="pt-5">
            <Button className="bg-blue-400">See More</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1723568625524-4101dee5991c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      {/* ini untuk bagian Mobilenya */}
      <div className="relative w-full md:hidden">
        {/* ini buat gambarnya ngeblur */}
      <img
          src="https://plus.unsplash.com/premium_photo-1723568625524-4101dee5991c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-auto rounded-md shadow-md filter blur-sm transition-all duration-200"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h5 className="text-3xl font-bold mb-4 font-rafeny">Why Our Client Choose Minha Nails?</h5>
          
          <div className="pt-5">
            <Button className="bg-blue-400 font-rafeny text-xl">See More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
