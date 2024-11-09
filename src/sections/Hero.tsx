"use client";



const Hero = () => {

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <img
        src="/images/1bg.webp"
        className="w-full h-screen object-cover"
      />
      <div className="absolute top-[5vh] flex flex-col justify-center items-center w-full h-full text-white">
        <div className="font-rafeny text-5xl font-semibold text-center">
          <h1>Minha Nail Art</h1>
          <h3>Creating Beauty</h3>
        </div>
        <div className="font-helvetica italic">
          <h5>Sentuhan Elegan untuk Setiap Kesempatan</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
