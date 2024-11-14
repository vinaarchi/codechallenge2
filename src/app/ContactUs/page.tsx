import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaShopify,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center p-12">
        <h1 className="text-5xl font-bold font-rafeny text-customPink">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
          {/* ini untuk whatsapp */}
          <a
            href="https://wa.me/6281333361434"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 border rounded-full p-5 bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-90"
          >
            <FaWhatsapp className="text-3xl text-green-500 mr-2" />
            <p className="text-xl"> +62 813-336-1434 </p>
          </a>

          {/* ini untuk instagram */}

          <a
            href="https://instagram.com/minha.nailverse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 border rounded-full p-5 bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-90"
          >
            <FaInstagram className="text-3xl mr-2" />
            <p className="text-xl"> @minha.nailverse </p>
          </a>

          {/* ini untuk tiktok */}

          <a
            href="https://tiktok.com/@minha.nailverse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 border rounded-full p-5 bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-90"
          >
            <FaTiktok className="text-3xl text-customDarkBlue mr-2" />
            <p className="text-xl"> @minha.nailverse </p>
          </a>

          {/* ini untuk shoppe nya */}

          <a
            href="https://shopee.co.id/minha330"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 border rounded-full p-5 bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-90"
          >
            <FaShopify className="text-3xl text-customDarkBlue mr-2" />
            <p className="text-xl"> @minha.nailverse </p>
          </a>

          {/* ini buat google mapnya */}

          <a
            href="https://www.google.com/maps?q=Jl.+Mulyosari+Tengah+V+no+60"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 border rounded-full p-5 bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-90"
          >
            <FaMapMarkerAlt className="text-3xl text-customPink mr-2" />
            <p className="text-xl"> Studio Minha Nails Art </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
