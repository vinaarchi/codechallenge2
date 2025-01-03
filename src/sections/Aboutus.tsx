import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex p-4" style={{ backgroundColor: "rgb(237, 218, 212)" }}>
      <div className="flex justify-center items-center m-5">
        {/* Container Flex untuk Desktop dan Mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
          {/* Gambar */}
          <div className="w-full md:w-1/2 mr-8 ml-8">
            <Image
              src="/images/2aboutus_11zon.webp"
              alt="About Us"
              width={500}
              height={300}
              className="h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
            />

            {/* Teks dan Tombol di tengah gambar untuk Mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full md:hidden">
              <p className="font-rafeny text-3xl font-bold">About Us</p>
              <div className="pt-5">
                <Link href="./tentangkami">
                  <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Teks untuk Desktop */}
          <div className="w-full p-6 text-center md:text-left hidden md:block">
            <p className="font-rafeny text-4xl pb-2 font-bold text-customPink">
              About Us
            </p>
            <h1 className="font-helvetica text-lg md:text-xl mb-4">
              Perjalanan kami telah ditandai dengan banyak pelanggan yang puas,
              desain inovatif, dan komitmen terhadap kualitas
            </h1>
            <div className="pt-1 font-helvetica">
              <Link href="./tentangkami">
                <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
                  Discover Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
