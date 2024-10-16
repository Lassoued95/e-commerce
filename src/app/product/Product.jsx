"use client";
import React, { useEffect, useRef } from "react";

function Product() {
  const products = [
    { id: 1, name: 'project1', image: 'im1.jpg' },
    { id: 2, name: 'project2', image: 'im2.jpg' },
    { id: 3, name: 'project3', image: 'im3.jpg' },
    { id: 4, name: 'project4', image: 'im4.jpg' },
    { id: 5, name: 'project5', image: 'im5.jpg' },
    { id: 6, name: 'project5', image: 'im1.jpg' },
    { id: 7, name: 'project5', image: 'im2.jpg' },
    { id: 8, name: 'project5', image: 'im3.jpg' },
  ];

  const productRef = useRef(null);
  const  productRef2 = useRef(null);


  // Scroll to the right when the right arrow key is pressed
  const handleKeyDown = (e) => {
    if (productRef.current) {
      if (e.key === "ArrowRight") {
        productRef.current.scrollBy({ left: 200, behavior: "smooth" }); // Scroll to the right
      }
      if (e.key === "ArrowLeft") {
        productRef.current.scrollBy({ left: -200, behavior: "smooth" }); // Scroll to the left
      }
      
    }
    if (productRef2.current) {
      if (e.key === "ArrowRight") {
        productRef2.current.scrollBy({ left: 200, behavior: "smooth" }); // Scroll to the right
      }
      if (e.key === "ArrowLeft") {
        productRef2.current.scrollBy({ left: -200, behavior: "smooth" }); // Scroll to the left
      }
      
    }

  };
  

  useEffect(() => {
    // Attach event listener when component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Function to scroll manually when button is clicked
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
      {/* the first div of the products*/}
      <div
        ref={productRef}
        className="flex space-x-6 overflow-x-auto py-4 no-scrollbar"
        id="prod"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg min-w-[200px] flex-shrink-0"
          >
            <img
              src={product.image}
              className="w-full h-48 object-cover mb-4"
              alt={product.name}
            />
            <h1 className="text-xl font-semibold">{product.name}</h1>
            <button className="float-right bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Scroll Button (Arrow) */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        &rarr; {/* Right Arrow */}
      </button>
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400  text-white p-2 rounded-full shadow-lg"
      >
      
      &larr; {/* Right Arrow */}
      </button>
    </div>
    <div className="relative">
      {/* Product Container */}
      {/*the second product div*/}
      <div
        ref={productRef2}
        className="flex space-x-6 overflow-x-auto py-4 no-scrollbar"
        id="prod"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg min-w-[200px] flex-shrink-0"
          >
            <img
              src={product.image}
              className="w-full h-48 object-cover mb-4"
              alt={product.name}
            />
            <h1 className="text-xl font-semibold">{product.name}</h1>
            <button className="float-right bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Scroll Button (Arrow) */}
      <button
        onClick={scrollRight2}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        &rarr; {/* Right Arrow */}
      </button>
      <button
        onClick={scrollLeft2}
        className="absolute top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400  text-white p-2 rounded-full shadow-lg"
      >
      
      &larr; {/* Right Arrow */}
      </button>
    </div>
    </>
  );
}

export default Product;
