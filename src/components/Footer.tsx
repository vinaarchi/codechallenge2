import React from "react";

const Footer = () => {
  return (
    <div className="flex p-5" style={{ backgroundColor: "rgb(225, 219, 219)" }}>
      <div className="flex flex-col p-4 w-1/4 justify-center">
        <div className="flex flex-row p-5 justify-start items-center">
          <img src="/logo.png" className="w-28 h-auto hidden md:block" />

          <ul className="flex flex-col items-start space-y-2 mt-4 ml-10 md:ml-20">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Program</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col p-4 w-1/3 justify-center ml-24 md:ml-44">
        <ul className="flex flex-col items-start space-y-2 mt-4">
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Kolom 3: Quote */}
      <div className="flex flex-col justify-center items-center p-4 w-1/2">
        <p className="font-rafeny text-center hidden md:block">
        &quot;We don&quot;t keep our beauty secrets&quot;
        </p>
      </div>
    </div>
  );
};

export default Footer;
