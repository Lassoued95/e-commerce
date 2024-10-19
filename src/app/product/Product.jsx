"use client";
import React, { useEffect, useRef, useState } from "react";

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
    { id:9, name:"serwel", image:"miboun 1.jpg"},
    {id:10, name:"serwel", image:"serwel1.avif"},
    {id:11, name:"serwel", image:"serwel2.webp"},

  ];

  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche
  const productRef = useRef(null);
  

  // Fonction pour gérer la recherche
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fonction pour filtrer les produits en fonction du terme de recherche
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   {/*const handleKeyDown = (e) => {
    if (productRef.current) {
      if (e.key === "ArrowRight") {
        productRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
      if (e.key === "ArrowLeft") {
        productRef.current.scrollBy({ left: -200, behavior: "smooth" });
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
  };*/}

  
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

      {/* Container pour les produits filtrés */}
      
      <div className="w-full h-auto">
  <div
    ref={productRef}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4  "
  >
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        className="border p-4 rounded-lg min-w-[200px] h-[350px] flex-shrink-0 overflow-y-hidden "
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

        {/* Boutons de défilement */}
        {/* <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-yellow-400 p-2 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          &rarr;
        </button>
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 transform -translate-y-1/2 bg-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white p-2 rounded-full shadow-lg"
        >
          &larr;
        </button>*/}
    </div>
    </>
  );
}

export default Product;
