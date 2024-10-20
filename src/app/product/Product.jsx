"use client";
import React, { useState, useRef } from "react";

function Product() {
  const products = [
    { id: 1, name: "sabat", image: "im1.jpg" },
    { id: 2, name: "sabat", image: "im2.jpg" },
    { id: 3, name: "sabat", image: "im3.jpg" },
    { id: 4, name: "sabat", image: "im4.jpg" },
    { id: 5, name: "sabat", image: "im5.jpg" },
    { id: 6, name: "sabat", image: "im1.jpg" },
    { id: 7, name: "sabat", image: "im2.jpg" },
    { id: 8, name: "sabat", image: "im3.jpg" },
    { id: 9, name: "serwel", image: "miboun 1.jpg" },
    { id: 10, name: "serwel", image: "serwel1.avif" },
    { id: 11, name: "serwel", image: "serwel2.webp" },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche
  const [filterCategory, setFilterCategory] = useState(""); // État pour la catégorie active
  const productRef = useRef(null);

  // Fonction pour gérer la recherche
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fonction pour gérer le filtrage par catégorie
  const handleCategoryFilter = (category) => {
    setFilterCategory(category);
  };

  // Fonction pour filtrer les produits en fonction du terme de recherche et de la catégorie
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? product.name === filterCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div id="prod">
        {/* Input de recherche */}
        <div className="mb-5 mt-3">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        {/* Boutons de filtrage par catégorie */}
        <div className="flex space-x-4 mb-5">
          <button
            onClick={() => handleCategoryFilter("")} // Montre tous les produits
            className={`p-2 px-4 rounded-lg ${
              filterCategory === "" ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryFilter("sabat")}
            className={`p-2 px-4 rounded-lg ${
              filterCategory === "sabat" ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            Sabat
          </button>
          <button
            onClick={() => handleCategoryFilter("serwel")}
            className={`p-2 px-4 rounded-lg ${
              filterCategory === "serwel" ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            Serwel
          </button>
        </div>

        {/* Container pour les produits filtrés */}
        <div className="w-full h-auto">
          <div
            ref={productRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg min-w-[200px] h-[350px] flex-shrink-0 overflow-y-hidden"
              >
                <img
                  src={product.image}
                  className="w-full h-48 object-cover mb-4 mt-[10px]"
                  alt={product.name}
                />
                <h1 className="text-xl font-semibold">{product.name}</h1>
                <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
