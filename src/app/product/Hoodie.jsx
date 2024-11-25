"use client";
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const HoodieData = [
  { id: 17, name: "Jordan Brooklyn Fleece", image: "/hoodie1.png",description:"L'emblématique sweat à capuche Tech Fleece Windrunner fait son grand retour. Poche pratique sur la manche. Liserés sur l'ourlet et les poignets. Chevron collé. Cette version arbore tous les détails qui ont fait la renommée du modèle original.", category: "Men" },
  { id: 18, name: "PSG Women's Hoodie", image: "/hoodie2.png",description:"Mise tout sur le confort avec ce sweat à capuche ample en molleton. Douceur et respirabilité : le tissu bouclé d'épaisseur moyenne est lisse à l'extérieur et doux à l'intérieur.", category: "Women" },
  { id: 19, name: "Nike Sport Kids Hoodie", image: "/hoodie3.png",description:"Incontournable de votre garde-robe, le sweat à capuche Nike Sportswear Club associe douceur, confort et style classique.", category: "Kids" },
  { id: 20, name: "Jordan Men's Hoodie", image: "/hoodie4.png",description:"Célébrez la puissance et la simplicité du Swoosh. Ce sweat à capuche en tissu Fleece brossé et chaud offre plus d’espace au niveau des épaules, de la poitrine et du corps pour un confort optimal et un style nostalgique décontracté. Les poignets et l'ourlet côtelés, épais et extensibles permettent de maintenir le sweat à capuche en place lorsque vous bougez et conservent la chaleur lorsqu'il fait froid. Notre Solo Swoosh est brodé sur le côté gauche de la poitrine pour un look épuré et décontracté.", category: "Men" },
  { id: 21, name: "Nike Club Fleece Women's", image: "/hoodie5.png",description:" Un superbe look stylé sur le terrain et au quotidien avec notre tissu Fleece premium léger. Lisse à l'intérieur comme à l'extérieur, ce sweat à capuche te tient chaud sans t'encombrer. En plus, son tissu anti-transpirant te garde au sec et à l'aise quand le rythme s'accélère.", category: "Women" },
  { id: 22, name: "Jordan MJ Brooklyn Kids", image: "/hoodie6.png",description:"Les entraînements par temps froid ne sont qu'un défi de plus à relever avec notre pull anti-transpirant Nike. Tissu doux et coupe décontractée : tu profites d'un confort optimal pour enchaîner les répétitions. ", category: "Kids" },
  { id: 23, name: "Nike Sport Men's", image: "/hoodie7.png",description:"On a revisité un essentiel Jordan et on l'a rendu plus confortable. Lisse à l'extérieur et brossé à l'intérieur, ce sweat à capuche ample en Fleece présente un effet délavé intégral pour un look usé parfait. Le patch ton sur ton et le cordon de serrage à embouts métalliques ajoutent la touche Jordan signature.", category: "Men" },
  { id: 24, name: "Nike Dry Women's", image: "/hoodie8.png",description:"LA pièce incontournable à porter tous les jours ? C'est le sweat à capuche confortable, bien sûr. Cet incontournable est confectionné en Fleece brossé d'épaisseur moyenne, ultra-doux à l'intérieur et lisse à l'extérieur.", category: "Women" },
];

function Hoodie() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const hoodieRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  const filteredHoodies = HoodieData.filter((hoodie) => {
    const matchesSearch = hoodie.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? hoodie.category === filterGender : true;
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
          <div ref={hoodieRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
            {filteredHoodies.map((hoodie) => (
              <div
                key={hoodie.id}
                className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
                onClick={() => navigate(`/product/jacket/${hoodie.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg ">
                  <img src={hoodie.image} className="w-full h-72 object-cover rounded-lg" alt={hoodie.name} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                    Click to see more
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-bold text-gray-800">{hoodie.name}</h1>
                <p className="text-gray-500 mt-2">{hoodie.category}</p>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{hoodie.description}</p>

               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hoodie;
