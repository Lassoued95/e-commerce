"use client";
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const JacketData = [
  { id: 25, name: "Nike Academy Jacket", image: "/jacket1.png",description:"Le vent, la pluie, la neige, le froid glacial, la chaleur, le soleil de la montagne… Avec la collection ACG, tu peux tout surmonter en extérieur. Ces pièces confortables haute performance sont équipées de différentes technologies pour t'aider à relever tous les défis, quelle que soit la météo (GORE-TEX, PrimaLoft®, Storm-FIT ADV, Therma-FIT ADV).", category: "Men" },
  { id: 26, name: "Nike Sportswear Women's ", image: "/jacket2.png",description:"Zippe ta veste et sors prendre l'air avec cette veste tissée ample. Empiècements indéchirables et résistants. Tissu respirant. Capuche spacieuse. Cette veste t'offre le style rétro, le confort et la protection que tu recherches.", category: "Women" },
  { id: 27, name: "PSG Kids Jacket", image: "/jacket3.png",description:"Notre veste Windrunner culte est prête à ouvrir un nouveau chapitre. Créée pour les jours de pluie, cette veste de running ultra-légère est déperlante pour que tu restes toujours au sec. Et quand il fait beau ? Son tissu anti-UV assure une protection totale au niveau des zones couvertes par la veste. Enfin, elle est compacte et très respirante pour te garder au frais quand tu cours, quelle que soit la longueur de ton parcours.", category: "Kids" },
  { id: 28, name: "Jordan  Jacket", image: "/jacket4.png",description:"Modèle incontournable et icône du running, voici la version revisitée de la veste Nike Miler. Ce modèle déperlant comporte une capuche pour te protéger des intempéries. Repliable, il affiche un look imprégné de l'histoire de Nike. Ce produit est entièrement fabriqué à partir de fibres de polyester recyclé", category: "Men" },
  { id: 29, name: "Nike trom-FIT Academy23 ", image: "/jacket5.png",description:"Conçu aussi bien pour un match, un voyage ou un après-midi de congé, notre survêtement Academy anti-transpirant te garantit une protection totale. L'ensemble pantalon et haut est doux et léger. Les aérations dans les endroits stratégiques te procurent juste ce qu'il faut de fraîcheur.", category: "Women" },
  { id: 30, name: "Jordan Renegade Kids", image: "/jacket6.png",description:"La veste aviateur a toujours été iconique, et la Renegade est la version Jordan de ce modèle culte. Tissu tissé doux et déperlant. Coupe ample. Rembourrage chaud et léger. Cette veste a tout ce qu'il faut. Et la poche en losange sur la manche apporte la touche Jordan signature.", category: "Kids" },
  { id: 31, name: "Jordan Jacket", image: "/jacket7.png",description:"Cette veste ne fait pas les choses à moitié. Poche sur la manche avec un Jumpman brodé. Boutons-pression en métal brossé, ornés du logo Jordan. Détails ruchés sur les manches. Tout s'assemble dans ce modèle stylé. Quand le vent se lève, remonte le col doublé en fausse fourrure. C'est le combo parfait entre chaleur et style." ,category: "Men" },
  { id: 32, name: "Jordan 23 Engineered ", image: "/jacket8.png",description:"En journée comme en soirée, notre veste de survêtement Solo Swoosh t'offre le style épuré et classique emblématique de la collection. Le liseré réfléchissant ajoute une touche de contraste au tissu tissé impeccable et léger. Pour un look complet à la maison ou pour faire du shopping, associe-le à notre pantalon de survêtement Solo Swoosh assorti.", category: "Women" },
];

function Jacket() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const jacketRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  const filteredJackets = JacketData.filter((jacket) => {
    const matchesSearch = jacket.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? jacket.category === filterGender : true;
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
          <div ref={jacketRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
            {filteredJackets.map((jacket) => (
              <div
                key={jacket.id}
                className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
                onClick={() => navigate(`/product/jacket/${jacket.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg ">
                  <img src={jacket.image} className="w-full h-72 object-cover rounded-lg" alt={jacket.name} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                    Click to see more
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-bold text-gray-800">{jacket.name}</h1>
                <p className="text-gray-500 mt-2">{jacket.category}</p>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{jacket.description}</p>

                <button className="mt-6 w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-colors">
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

export default Jacket;
