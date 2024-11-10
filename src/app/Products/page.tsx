"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/sections/Produts";
import Programs from "@/sections/Programs";
import { Button } from "@/components/ui/button";

const Product = () => {
  const handleRedirect = () => {
    window.open("https://shopee.co.id/minha330", "_blank");
  };

  const handleChat = () => {
    const message = encodeURIComponent(
      "Hai Sis, saya tertarik untuk ikut Course Nail Art"
    );

    return window.open(`https://wa.me/6281333361434?text=${message}`, "_blank");
  };

  return (
    <div>
      <Navbar />

      <div
        className="flex flex-col justify-center items-center"
        style={{ backgroundColor: "rgb(225, 219, 219)" }}
      >
        <p className="text-center p-6 font-helvetica w-[70%]">
          Yuk, lihat koleksi produk dan program kami dan temukan yang cocok
          untukmu! Kualitas terbaik dengan desain menarik hanya untuk kamu.
        </p>
      </div>

      <div className="fflex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
        <h1 className="font-rafeny text-customDarkBlue text-3xl pt-6 text-center">
          Produk Kami
        </h1>
        <h3 className="font-extralight text-customPink text-center">
          mulai dari Rp 65.000,-
        </h3>
        <Products />
        <div className="flex justify-center p-5">
          <Button
            className="font-light bg-customBlueSky text-customDarkBlue"
            onClick={handleRedirect}
          >
            check more product
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
        <h1 className="font-rafeny text-customDarkBlue text-3xl pt-6 text-center">
          Program Kami
        </h1>
        <h3 className="font-extralight text-customPink text-center w-[80%] ">
          Temukan berbagai ajaran unggulan mulai dari perawatan kuku, nail art
          custom, hingga paket perawatan lengkap
        </h3>
        <div className="w-full max-w-screen-lg px-4">
          <Programs />
        </div>
        <div className="flex justify-center p-5">
          <Button
            className="font-light bg-customBlueSky text-customDarkBlue"
            onClick={handleChat}
          >
            chat for more info
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
