"use client";
import React from "react";
import Product from "@/views/pages/home";
import Programs from "@/sections/Programs";
import { Button } from "@/components/ui/button";

const Prodpro: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hai Sis, saya tertarik untuk booking Nail Art"
    );
    // encodeURIComponent digunakan untuk sebuah string buat digunain dalam URL nya

    return window.open(`https://wa.me/6281333361434?text=${message}`, "_blank");
    //  _blank : ini buat nunjukkin kalo URl akan dibuka di tab baru di chrome, bukan di tab yang sama
  };

  const handleRedirect = () => {
    window.open("https://shopee.co.id/minha330", "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-10 space-x-0 md:space-x-4">
      {/* ini untuk bagian programnya */}
      <div className="border border-black rounded-md p-5 w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-5xl font-bold mb-14 font-rafeny text-center text-customPink">
          Programs
        </h2>
        <Programs />
        <div className="flex justify-center items-center pt-7">
          <Button
            className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky"
            onClick={handleClick}
          >
            Daftar Sekarang untuk Gabung Kelas!
          </Button>
        </div>
      </div>
      {/* kalo ini untuk bagian productsnya */}
      <div className="border border-black rounded-md p-5 w-full md:w-1/2">
        <h2 className="text-5xl font-bold mb-4 font-rafeny text-center  text-customDarkBlue">
          Products
        </h2>
        <Product isLandingPage={true}/>
        <div className="flex justify-center items-center pt-2 space-x-5">
          <a href="./produkkami">
            <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky">
              See More Product
            </Button>
          </a>
          <Button
            className=" bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125 hover:bg-customBlueSky"
            onClick={handleRedirect}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Prodpro;
