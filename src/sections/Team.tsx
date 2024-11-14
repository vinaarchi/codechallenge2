"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

const Team = () => {
  return (
    <div className=" flex flex-col justify-center items-center m-9">
      {/* ini untuk bagian desktopnya */}
      <div className="hidden md:flex flex-col items-center justify-center w-full">
        <h1 className="font-rafeny text-center text-5xl pt-10 pb-5 text-customPink">
          Meet The Team
        </h1>
        {/* <img src="/images/4team.webp" className="rounded-md w-1/2 mx-auto" /> */}
        <Image
          src="/images/4team.webp"
          alt="Team Page"
          width={500}
          height={300}
          className="h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
        />
        <h2 className="font-helvetica p-5 italic text-center mx-auto w-[50%]">
          Setiap anggota memiliki peran unik, bekerja bersama-sama untuk
          menciptakan pengalaman yang luar biasa.
        </h2>
        <a href="./OurTeam">
          <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
            See the Team
          </Button>
        </a>
      </div>

      {/* yang ini untuk bagian mobile nya */}
      <div className="relative w-full md:hidden">
        {/* aku buatin ini untuk ngeblur nya biar sama kayak yang lain */}
        <Image
          src="/images/4team.webp"
          alt="Team Page"
          width={500}
          height={300}
          className="h-auto filter md:filter-none blur-sm md:blur-0 transition-all duration-200"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="font-rafeny text-4xl font-bold mb-4">Meet The Team</h1>
          <a href="./OurTeam">
            <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
              See the Team
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
