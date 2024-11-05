"use client"

import React from "react";
import Products from "@/sections/Produts";
import Programs from "@/sections/Programs";

const Prodpro: React.FC = () => {
    return (
        <div className="flex justify-between p-10 ">
            <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-4">Programs</h2>
                <Programs />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Products</h2>
                <Products />
            </div>
        </div>
    )
}

export default Prodpro;