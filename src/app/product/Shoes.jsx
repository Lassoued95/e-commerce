"use client";
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export const Shoes = [
  { id: 33, name: "Air Jordan 1 Mid", image: "/shoes1.png",description:"Le rose est la couleur de la victoire. Cette paire rayonne avec un mélange éclatant de teintes roses. Tout le confort Jordan classique est également présent avec une unité Nike Air dans la semelle pour amortir chaque pas et une semelle cupsole en caoutchouc pour un confort total au quotidien." , category: "Men" },
  { id: 34, name: "Nike Air Max", image: "/shoes2.png",description:"Relevez tous les défis quotidiens dans le modèle Nike Defy All Day. Le cuir sur le dessus et le caoutchouc en dessous créent un modèle résistant adapté aux rigueurs des sessions d'entraînement intense. L'amorti souple est gage de confort pour votre entraînement ou durant une journée chargée.", category: "Men" },
  { id: 35, name: "Nike React Vision", image: "/shoes3.png",description:"Confortable, résistante et intemporelle : elle n'est pas classée numéro 1 pour rien. La conception culte des années 80 de la AF1, avec plusieurs détails originaux. Un plaisir sur le terrain comme au quotidien.", category: "Kids" },
  { id: 36, name: "Nike Air Force", image: "/shoes4.png",description:"Inspirée du corps humain et de l’ADN du running, la Nike Air Max 95 Essential associe un confort incroyable à un style qui ne passe pas inaperçu. Les empiècements latéraux emblématiques représentent les muscles, tandis que l'unité Nike Air visible au talon et à l'avant-pied amortit chaque foulée.", category: "Men" },
  { id: 37, name: "Jordan Max Aura 5", image: "/shoes5.png",description:"Revendiquez votre côté rebelle avec votre Nike Air Max Plus, un modèle Air novateur qui offre une stabilité optimale et un amorti exceptionnel. Reprenant les lignes ondulées, les détails en TPU et l'empeigne en mesh respirant du modèle d'origine, elle incarne un style rebelle.", category: "Men" },
  { id: 38, name: "G.T.Hustle Academy", image: "/shoes6.png",description:"Découvre la chaussure qui saura résister aux exigences d'une séance de fitness rythmée et d'une journée intense de musculation. Un talon plat, des matières résistantes et une semelle souple : tu as tout le confort et le maintien nécessaires pour faire du sport n'importe où et à tout moment.", category: "Women" },
  { id: 39, name: "LeBron", image: "/shoes7.jpeg",description:"La dernière fois, LeBron a bouleversé le monde du basket avec ses chaussures, comme lui seul sait le faire. La nouvelle version va encore plus loin. Système de câblage. Amorti Zoom Air. Construction légère. Conception près du sol. La LeBron XXI assure fluidité et explosivité sans t'alourdir. Créée pour dominer ses adversaires, elle est idéale pour les attaques à pleine vitesse façon LeBron et pour s'envoler vers le panier quand le match s'intensifie.", category: "Men" },
  { id: 40, name: "Nike Air Force", image: "/shoes8.png",description:"Le confort est roi, mais pas au détriment du style. S'inspirant de la AJ1 et de la AJ5, la Stadium 90 est parfaite pour le quotidien. L'empeigne en cuir et tissu tissé est à la fois résistante et respirante. L'amorti Nike Air dans la semelle offre légèreté et amorti à chaque pas.", category: "Women" },
];

function ProductDetaileshoes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const shoesRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  const filteredShoes = Shoes.filter((shoe) => {
    const matchesSearch = shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? shoe.category === filterGender : true;
    return matchesSearch && matchesGender;
  });

  return (
    <>
      <div id="prod">
        <div className="mb-5 mt-3">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        <div className="flex space-x-4 mb-5">
          <button
            onClick={() => handleGenderFilter("")}
            className={`p-2 px-4 rounded-lg ${filterGender === "" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            All
          </button>
          <button
            onClick={() => handleGenderFilter("Men")}
            className={`p-2 px-4 rounded-lg ${filterGender === "Men" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            Men
          </button>
          <button
            onClick={() => handleGenderFilter("Women")}
            className={`p-2 px-4 rounded-lg ${filterGender === "Women" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            Women
          </button>
          <button
            onClick={() => handleGenderFilter("Kids")}
            className={`p-2 px-4 rounded-lg ${filterGender === "Kids" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            Kids
          </button>
        </div>

        <div className="w-full">
          <div ref={shoesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
            {filteredShoes.map((shoe) => (
              <div
                key={shoe.id}
                className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
                onClick={() => navigate(`/product/shoes/${shoe.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg ">
                  <img src={shoe.image} className="w-full h-72 object-cover rounded-lg" alt={shoe.name} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                    Click to see more
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-bold text-gray-800">{shoe.name}</h1>
                <p className="text-gray-500 mt-2">{shoe.category}</p>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{shoe.description}</p>

                
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
}

export default ProductDetaileshoes;
