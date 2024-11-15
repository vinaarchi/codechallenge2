"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

const Testi = () => {
  return (
    <div className="flex p-4" style={{ backgroundColor: "rgb(237, 218, 212)" }}>
      <div className="flex justify-center items-center m-5">
        {/* ini fungsi untuk bagian Dekstop */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="mr-2 ml-8 md:w-1/2">
            <p className="text-4xl font-bold mb-4 font-rafeny text-customPink">
              Why Our Client Choose Minha Nails
            </p>
            <p className="font-helvetica text-xl mb-4">
              Kami menawarkan berbagai pilihan nail art yang sesuai dengan tren
              terkini yang siap memanjakan Anda!
            </p>
            <div className="pt-5">
              <a href="./Testimonial">
                <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
                  Explore What Clients Say About Us
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
              className="h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
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
            <p className="text-3xl font-bold mb-4 font-rafeny">
              Why Our Client Choose Minha Nails?
            </p>

            <div className="pt-5">
              <a href="./Testimonial">
                <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
                  View Our Testimonials
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
