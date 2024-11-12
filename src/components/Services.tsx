"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface Service {
  name: string;
  price: string;
}
const services: Service[] = [
  { name: "Nail Polos", price: "89.000" },
  { name: "Custom Design", price: "250.000" },
  { name: "Remove Nail Art", price: "60.000" },
];

const handleClick = () => {
  const message = encodeURIComponent("Hai Sis, saya tertarik untuk booking Nail Art")
// encodeURIComponent digunakan untuk sebuah string buat digunain dalam URL nya

  return window.open(`https://wa.me/6281333361434?text=${message}`, "_blank");
  //  _blank : ini buat nunjukkin kalo URl akan dibuka di tab baru di chrome, bukan di tab yang sama
};

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-8 ">
      <div className="text-center font-serif">
        <h1 className="text-3xl font-rafeny font-bold mb-4 text-customPink">
          Our Services
        </h1>
        <h4 className="text-lg italic font-helvetica">
          Get Your Nails Done for Great Mood. Simple pleasures can make your
          week, not just day
        </h4>
      </div>
      <div className="font-helvetica max-w-2xl mx-auto p-2 ">
        <div className="space-y-4 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between border-b pb-2 space-x-36 md:space-x-96"
            >
              <span className="font-helvetica">{service.name}</span>
              <span className="font-rafeny font-bold text-customDarkBlue">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Button
          className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125"
          onClick={handleClick}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default Services;
