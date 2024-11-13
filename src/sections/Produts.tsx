"use client";

import React from "react";
import Image from "next/legacy/image";

const products = [
  { id: 1, name: "MPON-001", price: "65.000", image: "/images/WB-1E.webp" },
  { id: 2, name: "MPON-002", price: "75.000", image: "/images/WB-5E.webp" },
  { id: 3, name: "MPON-003", price: "85.000", image: "/images/WB-13E.webp" },
  { id: 4, name: "MPON-004", price: "85.000", image: "/images/NB-12E.webp" },
  { id: 5, name: "MPON-005", price: "75.000", image: "/images/NB-13E.webp" },
  { id: 6, name: "MPON-006", price: "65.000", image: "/images/NB-24E.webp" },
  {
    id: 7,
    name: "MPON-007",
    price: "65.000",
    image: "/images/NB-21E_1.webp",
  },
  { id: 8, name: "MPON-008", price: "65.000", image: "/images/NB-23E.webp" },
];
const Products: React.FC = () => {
  return (
    <div className="flex flex-row items-center overflow-x-auto space-x-8">
      {products.map((product) => (
        <div key={product.id} className="m-1 text-center w-60">
          <div className="w-64 h-64 overflow-hidden">
            <Image
              src={product.image}
              alt="Product Image"
              width={500}
              height={500}
            />
          </div>
          <h3 className="text-lg font-semibold text-center text-customDarkBlue">
            {product.name}
          </h3>
          <p className="text-black">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
