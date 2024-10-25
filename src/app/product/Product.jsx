"use client";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Exporting products array
export const products = [
  { id: 1, name: "project1", image: "im1.jpg" },
  { id: 2, name: "project2", image: "im2.jpg" },
  { id: 3, name: "project3", image: "im3.jpg" },
  { id: 4, name: "project4", image: "im4.jpg" },
  { id: 5, name: "project5", image: "im5.jpg" },
  { id: 6, name: "project6", image: "im1.jpg" },
  { id: 7, name: "project7", image: "im2.jpg" },
  { id: 8, name: "project8", image: "im3.jpg" },
  { id: 9, name: "serwel", image: "serwel1.avif" },
  { id: 10, name: "serwel", image: "serwel2.webp" },
  { id: 10, name: "serwel", image: "model.jpg" },
];


function Product() {
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [filterCategory, setFilterCategory] = useState(""); // Active category filter
  const productRef = useRef(null); // For scroll behavior

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category filtering
  const handleCategoryFilter = (category) => {
    setFilterCategory(category);
  };

  // Function to filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? product.name === filterCategory : true;
    return matchesSearch && matchesCategory;
  });
/*
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
*/
  return (
    <>
      <div id="prod">
        {/* Search Input */}
        <div className="mb-5 mt-3">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex space-x-4 mb-5">
          <button
            onClick={() => handleCategoryFilter("")}
            className={`p-2 px-4 rounded-lg ${filterCategory === "" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryFilter("sabat")}
            className={`p-2 px-4 rounded-lg ${filterCategory === "sabat" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            Sabat
          </button>
          <button
            onClick={() => handleCategoryFilter("serwel")}
            className={`p-2 px-4 rounded-lg ${filterCategory === "serwel" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            Serwel
          </button>
        </div>

        {/* Product Display */}
        <div className="w-full h-auto">
          <div ref={productRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg min-w-[200px] h-[350px] flex-shrink-0">
                <img src={product.image} className="w-full h-48 object-cover mb-4" alt={product.name} />
                <h1 className="text-xl font-semibold">{product.name}</h1>
                <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg">Buy Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons 
        <button onClick={scrollRight} className="absolute top-1/2 right-4">&rarr;</button>
        <button onClick={scrollLeft} className="absolute top-1/2 left-4">&larr;</button>
        */}
      </div>
      
    </>
  );
}

export default Product;
