"use client"

import React from "react"

const programs = [
    {id: 1, name: 'Menicure Class', price: '699.000', image: 'HD-12E_1'},
    {id: 2, name: '3D Design', price: '899.000', image: 'HD-8E_2'}
]
const Programs:React.FC = () => {
    return (
        <div className="flex flex-row items-center">
            {/* stiap program yang ada, akan dibuatkan elemen div */}
            {programs.map(program => (
                <div key={program.id} className="m-4 text-center">
                    <img src={program.image} className="w-32 h-32" />
                    <h3 className="text-lg font-semibold">{program.name}</h3>
                    <p className="text-gray-600">{program.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Programs;