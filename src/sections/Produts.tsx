"use client"

import React from "react"

const products = [
    { id: 1, name: 'MPON-001', price: '65.000', image: 'WB-5E'},
    { id: 2, name: 'MPON-002', price: '75.000', image: 'WB-1E'},
    { id: 2, name: 'MPON-002', price: '75.000', image: 'WB-1E'},
    { id: 2, name: 'MPON-002', price: '75.000', image: 'WB-1E'},
]
const Products: React.FC = () => {
    return (
        <div className="flex flex-row items-center overflow-x-auto">
            {products.map(product => (
            <div key={product.id} className="m-4 text-center" >
                <img src={product.image} className="w-32 h-32"/>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
            </div>

            ))}
        </div>
    )
}

export default Products