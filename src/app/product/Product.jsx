"use client";
import React, { useEffect, useRef } from "react";

// Exporting products array
export const products = [
  { id: 1, name: 'project1', image: 'im1.jpg' },
  { id: 2, name: 'project2', image: 'im2.jpg' },
  { id: 3, name: 'project3', image: 'im3.jpg' },
  { id: 4, name: 'project4', image: 'im4.jpg' },
  { id: 5, name: 'project5', image: 'im5.jpg' },
  { id: 6, name: 'project6', image: 'im1.jpg' },
  { id: 7, name: 'project7', image: 'im2.jpg' },
  { id: 8, name: 'project8', image: 'im3.jpg' },
];

function Product() {
  const productRef = useRef(null);
  const productRef2 = useRef(null);

  const handleKeyDown = (e) => {
    if (productRef.current) {
      if (e.key === "ArrowRight") {
        productRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
      if (e.key === "ArrowLeft") {
        productRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
    if (productRef2.current) {
      if (e.key === "ArrowRight") {
        productRef2.current.scrollBy({ left: 200, behavior: "smooth" });
      }
      if (e.key === "ArrowLeft") {
        productRef2.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollRight = () => {
    if (productRef.current) {
      productRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (productRef.current) {
      productRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight2 = () => {
    if (productRef2.current) {
      productRef2.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft2 = () => {
    if (productRef2.current) {
      productRef2.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative">
        {/* Product Container */}
        <div ref={productRef} className="flex space-x-6 overflow-x-hidden overflow-y-hidden py-4 no-scrollbar">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg min-w-[200px] h-[250px] flex-shrink-0">
              <img src={product.image} className="w-full h-48 object-cover mb-0" alt={product.name} />
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg">Buy Now</button>
            </div>
          ))}
        </div>
        {/* Scroll Buttons */}
        <button onClick={scrollRight} className="absolute top-1/2 right-4">&rarr;</button>
        <button onClick={scrollLeft} className="absolute top-1/2 left-4">&larr;</button>
      </div>
      <div className="relative">
        {/* Product Container */}
        <div ref={productRef2} className="flex space-x-6 overflow-x-hidden overflow-y-hidden py-4 no-scrollbar">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg min-w-[200px] h-[250px] flex-shrink-0">
              <img src={product.image} className="w-full h-48 object-cover mb-4" alt={product.name} />
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg">Buy Now</button>
            </div>
          ))}
        </div>
        {/* Scroll Buttons */}
        <button onClick={scrollRight2} className="absolute top-1/2 right-4">&rarr;</button>
        <button onClick={scrollLeft2} className="absolute top-1/2 left-4">&larr;</button>
      </div>
    </>
  );
}

export default Product;
