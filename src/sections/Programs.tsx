"use client";

import React from "react";
import Image from "next/legacy/image";

const programs = [
  {
    id: 1,
    name: "Basic NailArt",
    price: "699.000",
    image: "/images/NB-25E.webp",
  },
  {
    id: 2,
    name: "3D Character Design",
    price: "899.000",
    image: "/images/NB-26E.webp",
  },
  {
    id: 3,
    name: "Menicure Class",
    price: "899.000",
    image: "/images/NB-21E.webp",
  },
  { id: 4, name: "Clay Design", price: "899.000", image: "/images/NB-2E.webp" },
];
const Programs: React.FC = () => {
  return (
    <div className="flex flex-row items-center overflow-x-auto space-x-8">
      {/* stiap program yang ada, akan dibuatkan elemen div */}
      {programs.map((program) => (
        <div key={program.id} className="m-1 text-center w-60">
          <div className="w-64 h-64 overflow-hidden">
            <Image
              src={program.image}
              alt="Program image"
              width={500}
              height={500}
              className="p-2"
            />
          </div>
          <h3 className="text-lg font-semibold text-customPink">
            {program.name}
          </h3>
          <p className="text-gray-600">{program.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Programs;
