import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
        <Navbar />
      <div className="flex flex-col justify-center items-center p-16">
        <h1 className="text-3xl font-rafeny text-customPink">Contact Us</h1>

        <div className="flex items-center mt-4 border rounded-full p-5">
            <FaWhatsapp className="text-3xl text-green-500 mr-2"/>
            <p className="text-xl"> +62 813-336-1434 </p>
        </div>
        <div className="flex items-center mt-4 border rounded-full p-5">
            <FaInstagram className="text-3xl mr-2"/>
            <p className="text-xl"> @minha.nailverse </p>
        </div>
        <div className="flex items-center mt-4 border rounded-full p-5">
            <FaTiktok className="text-3xl text-customDarkBlue mr-2"/>
            <p className="text-xl"> @minha.nailverse </p>
        </div>
        <div className="flex items-center mt-4 border rounded-full p-5">
            <FaMapMarkerAlt className="text-3xl text-customPink mr-2"/>
            <p className="text-xl"> Jl. Sumatera no 231 </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
