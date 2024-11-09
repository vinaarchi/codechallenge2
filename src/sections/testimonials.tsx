"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Testi = () => {
  return (
    <div className="flex items-center justify-center p-5 mt-10 mb-10">
      {/* ini fungsi untuk bagian Dekstop */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="mr-5 md:w-1/2">
          <h5 className="text-3xl font-bold mb-4 font-rafeny text-customPink">
            Why Our Client Choose Minha Nails
          </h5>
          <h2 className="font-helvetica mb-4">
            Kami menawarkan berbagai pilihan nail art yang sesuai dengan tren
            terkini yang siap memanjakan Anda!
          </h2>
          <div className="pt-5">
            <a href="./Testimonial">
              <Button className="bg-customBlueSky text-customDarkBlue">
                See More
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/3testimonial.webp"
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      {/* ini untuk bagian Mobilenya */}
      <div className="relative w-full md:hidden">
        {/* ini buat gambarnya ngeblur */}
        <img
          src="/images/3testimonial.webp"
          className="w-full h-auto rounded-md shadow-md filter blur-sm transition-all duration-200"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h5 className="text-3xl font-bold mb-4 font-rafeny">
            Why Our Client Choose Minha Nails?
          </h5>

          <div className="pt-5">
            <a href="./Testimonial">
              <Button className="bg-customBlueSky text-customDarkBlue">
                See More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
