"use client";

import * as React from "react";
import Image from "next/legacy/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <Image
        src="/images/1bg.webp"
        alt="Background"
        width={1920}
        height={1080}
        priority={true}
      />
      <div className="absolute top-[5vh] flex flex-col justify-center items-center w-full h-full text-white">
        <div className="font-rafeny text-5xl font-semibold text-center">
          <h1>Minha Nail Art</h1>
          <p>Creating Beauty</p>
        </div>
        <div className="font-helvetica italic">
          <p>Sentuhan Elegan untuk Setiap Kesempatan</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
