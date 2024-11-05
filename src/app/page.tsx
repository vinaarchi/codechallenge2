"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/components/Services";
import About from "@/sections/Aboutus";
import Testi from "@/sections/testimonials";
import Prodpro from "@/components/Prodpro";
import Team from "@/sections/Team";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Prodpro />
      <Testi />
      <Team />
      <Footer />
    </div>
  );
};
export default Home;
