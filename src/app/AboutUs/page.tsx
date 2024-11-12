"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center items-center p-7">
        <h1 className="font-rafeny text-4xl text-customDarkBlue pb-6">
          About Us
        </h1>
        <img
          src="/images/AboutUs.webp"
          className="w-96 rounded-md shadow-md mb-6"
        />
        <p className="text-center mb-6">
          Selamat datang di Minha Nail Art, tempat di mana kreativitas bertemu
          dengan presisi dalam seni merias kuku. Didirikan pada tahun 2024
          dengan misi menghadirkan seni kuku berkualitas tinggi yang memukau,
          kami telah berkembang dari sebuah studio kecil menjadi merek yang
          dikenal karena inovasi dan keanggunannya.
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center p-7"
        style={{ backgroundColor: "rgb(225, 219, 219)" }}
      >
        <h1 className="font-rafeny text-4xl text-customDarkBlue pb-6">
          Team Kami
        </h1>
        <img
          src="/images/Our Team.webp"
          className="w-96 rounded-md shadow-md mb-6"
        />
        <p className="text-center mb-6">
          Tim kami terdiri dari para seniman dan teknisi kuku yang terampil,
          masing-masing dengan keahlian unik dan dedikasi tinggi terhadap
          kesempurnaan. Kami percaya dalam pembelajaran berkelanjutan, dan para
          seniman kami selalu mengikuti tren dan teknik terbaru untuk memberikan
          pengalaman yang luar biasa setiap kali Anda berkunjung.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-7">
        <h1 className="font-rafeny text-4xl text-customDarkBlue pt-4pb-6">
          Budaya
        </h1>
        <img
          src="/images/culture.webp"
          className="w-96 rounded-md shadow-md mb-6"
        />
        <p className="text-center">
          Di Minha Nail Art, kami menjunjung tinggi budaya kreativitas,
          inklusivitas, dan keunggulan. Kami merayakan keunikan setiap individu
          dan percaya bahwa seni kuku adalah cara yang kuat untuk
          mengekspresikan kepribadian dan gaya. Studio kami adalah ruang yang
          hangat dan menyambut, di mana setiap klien merasa terinspirasi,
          rileks, dan dihargai.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
