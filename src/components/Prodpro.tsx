

import React from "react";
import Products from "@/sections/Produts";
import Programs from "@/sections/Programs";
import { Button } from "@/components/ui/button";

const Prodpro: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-10 space-x-0 md:space-x-4">
      {/* ini untuk bagian programnya */}
      <div className="border border-black rounded-md p-5 w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-5xl font-bold mb-4 font-rafeny text-center text-customPink">
          Programs
        </h2>
        <Programs />
        <div className="flex justify-center items-center pt-2">
          <a href="./Products&Program">
            <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
              See More
            </Button>
          </a>
        </div>
      </div>
      {/* kalo ini untuk bagian productsnya */}
      <div className="border border-black rounded-md p-5 w-full md:w-1/2">
        <h2 className="text-5xl font-bold mb-4 font-rafeny text-center  text-customDarkBlue">
          Products
        </h2>
        <Products />
        <div className="flex justify-center items-center pt-2">
          <a href="./Products&Program">
            <Button className="bg-customBlueSky text-customDarkBlue transform transition-transform duration-300 hover:scale-125">
              See More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prodpro;
