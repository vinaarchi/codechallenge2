"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testi = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <h1 className="text-center text-3xl font-rafeny text-customDarkBlue font-bold">
          Why Our Client Choose Minha Nails
        </h1>
        <p className="text-center pt-4 font-helvetica">
          Minha Nails adalah pilihan terbaik bagi mereka yang menginginkan hasil
          sempurna, layanan profesional, dan pengalaman yang tak terlupakan.
          Kami di sini untuk membuat kuku Anda terlihat memukau dan penuh gaya!
        </p>
        <h2 className="text-center pt-8 font-rafeny text-customPink text-3xl">
          Testimoni Pelanggan - Order via WhatsApp
        </h2>
        <Carousel className="pt-5">
          <CarouselContent className="flex gap-0">
            <CarouselItem className="flex-none">
              <img src="/images/testi/3.webp" className="w-36 " />
            </CarouselItem>
            <CarouselItem className="flex-none">
              <img src="/images/testi/4.webp" className="w-36" />
            </CarouselItem>
            <CarouselItem className="flex-none">
              <img src="/images/testi/5.webp" className="w-36" />
            </CarouselItem>
            <CarouselItem className="flex-none">
              <img src="/images/testi/6.webp" className="w-36" />
            </CarouselItem>
            <CarouselItem className="flex-none">
              <img src="/images/testi/7.webp" className="w-36" />
            </CarouselItem>
            <CarouselItem className="flex-none">
              <img src="/images/testi/8.webp" className="w-36" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h2 className="text-center pt-8 font-rafeny text-customPink text-3xl">
          Testimoni Pelanggan - Order via Shoppe
        </h2>
        <Carousel className="pt-5 pb-8">
          <CarouselContent className="flex gap-0">
            <CarouselItem className="flex-none">
              <img src="/images/testi/1.webp" className="w-36 " />
            </CarouselItem>
            <CarouselItem className="flex-none">
              <img src="/images/testi/2.webp" className="w-36" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Testi;
