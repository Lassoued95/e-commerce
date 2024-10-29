"use client";
import React, { useState, useRef } from "react";


// Exporting products array
export const products = [
  { id: 1, name: "shoes", image: "shoes_prod.png" },
  { id: 2, name: "jacket", image: "jacket_prod.png" },
  { id: 3, name: "hoodie", image: "hoodie_prod.png" },
  { id: 4, name: "bag", image: "bag_prod.png" },
  { id: 5, name: "cap", image: "cap1.png" },
  { id: 6, name: "pantalon", image: "pantalon.png" },
  { id: 7, name: "glass", image: "hoodie_prod.png" },
  { id: 8, name: "children_prod", image: "children_prod.png" },
  

];

function Product() {

  return (
    <>
      

        {/* Product Display */}
        <div className="w-full h-auto">
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 mt-[-10%] ">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg min-w-[200px] h-[400px] flex-shrink-0">
                <img src={product.image} className="w-full h-65 object-cover mb-4 mt-3" alt={product.name} />
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
