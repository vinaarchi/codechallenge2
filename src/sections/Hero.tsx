"use client";

import * as React from "react"
import Image from "next/legacy/image";


const Hero = () => {

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* <img
        src="/images/1bg.webp"
        className="w-full h-screen object-cover"
      /> */}
      <Image 
      src="/images/1bg.webp"
      alt="Background"
      layout="fill"
      objectFit="cover"
      priority={true}
      />
      <div className="absolute top-[5vh] flex flex-col justify-center items-center w-full h-full text-white">
        <div className="font-rafeny text-5xl font-semibold text-center">
          <h1>Minha Nail Art</h1>
          <h3>Creating Beauty</h3>
        </div>
        <div className="font-helvetica italic">
          <h5>Sentuhan Elegan untuk Setiap Kesempatan</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
