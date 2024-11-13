"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Testi = () => {
  return (
    <div className="flex p-4" style={{ backgroundColor: "rgb(237, 218, 212)" }}>
      <div className="flex justify-center items-center m-10">
        {/* ini fungsi untuk bagian Dekstop */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="mr-2 ml-8 md:w-1/2">
            <h5 className="text-4xl font-bold mb-4 font-rafeny text-customPink">
              Why Our Client Choose Minha Nails
            </h5>
            <h2 className="font-helvetica text-xl mb-4">
              Kami menawarkan berbagai pilihan nail art yang sesuai dengan tren
              terkini yang siap memanjakan Anda!
            </h2>
            <div className="pt-5">
              <a href="./Testimonial">
                <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
                  See More
                </Button>
              </a>
            </div>
          </div>
          <div className="relative mr-10">
            <Image
              src="/images/3testimonial_11zon.webp"
              alt="Deskripsi Gambar"
              width={500}
              height={300}
              className="rounded-md h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
            />
          </div>
        </div>

        {/* ini untuk bagian Mobilenya */}
        <div className="relative w-full md:hidden">
          {/* ini buat gambarnya ngeblur */}
          <Image
            src="/images/3testimonial_11zon.webp"
            alt="Deskripsi Gambar"
            width={500}
            height={300}
            className="rounded-md h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h5 className="text-3xl font-bold mb-4 font-rafeny">
              Why Our Client Choose Minha Nails?
            </h5>

            <div className="pt-5">
              <a href="./Testimonial">
                <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
                  See More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
