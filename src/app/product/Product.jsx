"use client";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Exporting products array
export const products = [
  { id: 1, name: "project1", image: "im1.jpg" },
  { id: 2, name: "project2", image: "im2.jpg" },
  { id: 3, name: "project3", image: "im3.jpg" },
  
];

function Product() {
  

  return (
    <>
      

        {/* Product Display */}
        <div className="w-full h-auto">
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg min-w-[200px] h-[350px] flex-shrink-0">
                <img src={product.image} className="w-full h-48 object-cover mb-4" alt={product.name} />
                <h1 className="text-xl font-semibold">{product.name}</h1>
                <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg">show more...</button>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
}

export default Product;
