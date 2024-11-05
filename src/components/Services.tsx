"use client";

import React from "react";

interface Service {
  name: string;
  price: string;
}
const services: Service[] = [
  { name: "Nail Polos", price: "89.000" },
  { name: "Custom Design", price: "250.000" },
  { name: "Remove Nail Art", price: "60.000" },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-8 ">
      <div className="text-center font-serif">
        <h1 className="text-3xl font-rafeny font-bold mb-4">Our Services</h1>
        <h4 className="text-lg italic font-helvetica">
          Get Your Nails Done for Great Mood. Simple pleasures can make your
          week, not just day
        </h4>
      </div>
      <div className="font-helvetica max-w-2xl mx-auto p-2">
        <div className="space-y-4 mt-6">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between border-b pb-2 space-x-11">
              <span>{service.name}</span>
              <span>{service.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-black rounded p-3">
        <a href="#">
          Book Appointment
          </a>
      </div>
    </div>
  );
};

export default Services;
