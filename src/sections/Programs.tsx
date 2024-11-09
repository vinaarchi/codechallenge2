"use client"

import React from "react"


const programs = [
    {id: 1, name: 'Basic NailArt', price: '699.000', image: '/images/NB-25E.webp'},
    {id: 2, name: '3D Character Design', price: '899.000', image: 'images/NB-26E.webp'},
    {id: 3, name: 'Menicure Class', price: '899.000', image: 'images/NB-21E.webp'},
    {id: 4, name: 'Clay Design', price: '899.000', image: 'images/NB-2E.webp'},
]
const Programs:React.FC = () => {
    return (
        <div className="flex flex-row items-center overflow-x-auto">
            {/* stiap program yang ada, akan dibuatkan elemen div */}
            {programs.map(program => (
                <div key={program.id} className="m-1 text-center w-60">
                    <div className="w-64 h-64 overflow-hidden m-1">
                        <img 
                            src={program.image}  
                            className="w-full h-full p-2 object-cover"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-customPink">{program.name}</h3>
                    <p className="text-gray-600">{program.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Programs;