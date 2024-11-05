"use client";

const Hero = () => {
  return (
    <div id="banner">
      <img
        src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Background"
        width="100%"
      />
      <div id="text-banner">
        <div className="font-rafeny text-5xl font-semibold">
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
