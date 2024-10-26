"use client";
import React, { useState, useRef } from "react";


// Exporting products array
export const products = [
  { id: 1, name: "Shoes", image: "shoes_prod.png" },
  { id: 2, name: "Hoodie", image: "hoodie_prod.png" },
  { id: 3, name: "Jacket", image: "jacket_prod.png" },
  { id: 3, name: "Jacket", image: "bag_prod.png" },
  
];
function Product() {
 return (
    <>
        <div className="w-full h-auto">
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg min-w-[200px] h-[350px] flex-shrink-0">
                <img src={product.image} className="w-full h-48 object-cover mb-4" alt={product.name} />
                <h1 className="text-xl font-semibold">{product.name}</h1>
                <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg">Show more...</button>
              </div>
            ))}
          </div>
        </div>
    
    </>
  );
}

export default Product;