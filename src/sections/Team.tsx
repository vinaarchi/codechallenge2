"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-5 mt-10 mb-10">
      {/* ini untuk bagian desktopnya */}
      <div className="hidden md:flex flex-col items-center justify-center w-full">
        <h1 className="font-rafeny text-center text-5xl pt-10 pb-5 text-customPink">
          Meet The Team
        </h1>
        <img src="/images/4team.webp" className="rounded-md w-1/2 mx-auto" />
        <h2 className="font-helvetica pb-12 italic text-center mx-auto w-[50%]">
          Setiap anggota memiliki peran unik, bekerja bersama-sama untuk
          menciptakan pengalaman yang luar biasa.
        </h2>
        <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
          See the Team
        </Button>
      </div>

      {/* yang ini untuk bagian mobile nya */}
      <div className="relative w-full md:hidden">
        {/* aku buatin ini untuk ngeblur nya biar sama kayak yang lain */}
        <img
          src="/images/4team.webp"
          className="w-full h-auto rounded-md shadow-md filter blur-sm transition-all duration-200"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="font-rafeny text-4xl font-bold mb-4">Meet The Team</h1>
          <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
            See the Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;
