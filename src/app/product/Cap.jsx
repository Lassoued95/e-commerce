import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Product_Details from "../product/Product_Details.jsx";

// Exporting products array
export const products = [
  { id: 1, name: "Nike Futura", 
    image: "/cap2.png",category: "Women" ,category_prod:'cap' , description: "A multisport MVP, the Club Cap has Nike AeroBill and sweat-wicking tech that combine to keep you cool and comfortable whether you're practicing or chasing your friends. Lighter weight and more flexible than traditional types, this curved-brim cap helps shade your eyes so you can bring your A-game."},
  { id: 2, name: "Nike Futura", image: "/cap3.png", category_prod:'cap', category: "Women" ,description:"Step your Swoosh game up with this mid-depth, unstructured Club Cap. Its curved bill and metal Swoosh logo give your look a clean finish while sweat-wicking tech helps you stay cool and comfortable while you make the most of warm, sunny weather."},
  { id: 3, name: "Nike Fly", image: "/cap4.png", category_prod:'cap',  category: "Men" ,description:"From the gym to the course to the courts, do it all with the Nike Club Cap. This structured mid-depth cap features advanced sweat-wicking fabric and strategically placed perforations for a super breathable feel where you need it most. Top it off with a flexible AeroBill and snapback closure, so you can focus on what matters: hitting that next fitness goal and playing your favorite sport."},
  { id: 4, name: "Utah Royals FC", image: "/cap5.png", category_prod:'cap',  category: "Men" ,description:"Top off your look with a little Ramblers pride. Breathable mesh panels help keep your head cool and comfortable while team details on the front show everyone who you're cheering for." },
  { id: 5, name: "Orlando Pride Classic99", image: "/cap6.jpg",  category_prod:'cap', category: "Women" ,description:"Kiddos can keep it timeless in this cap, made of cotton twill with a soft, brushed finish in a classic 6-panel construction. The curved brim and built-in sweatband help keep them cool and dry and the adjustable strapback closure provides a fit that's just right." },
  { id: 6, name: "Nike Dri-FIT Club", image: "/cap7.png", category_prod:'cap',  category: "Kids" ,description:"Featuring an embroidered Jumpman logo and cord trim, this is the classic trucker hat, Jordan style. The 6-panel construction features a poly mesh front with 4 breathable mesh panels. The snapback closure helps you get a fit that's just right and the semi-curved brim and built-in cotton sweatband help your head stay cool and comfy while you're out under the sun." },
  { id: 7, name: "Washington State", image: "/cap1.png", category_prod:'cap',  category: "Men" ,description:"The performance-driven Fly cap is built for all your sports and activities. Its low-depth, 5-panel design offers a close fit. Plus, breathable fabric features sweat-wicking material to help keep you cool to the end." },
  { id: 8, name: "Los Angeles Dodgers City Connect Swoosh", image: "/cap8.jpg", category_prod:'cap',  category: "Men" ,description:"Made for your next workout, the low-depth Nike Fly Cap has a waterproof, seam-sealed design that's ready to tackle all types of conditions. Lightweight with a flexible 5-panel design, it's a go-to cap for any outdoor activity—rain or shine." },
];

function Cap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? product.category === filterGender : true;
    return matchesSearch && matchesGender;
  });

  return (
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
        <button onClick={() => handleGenderFilter("")} className={`p-2 px-4 rounded-lg ${filterGender === "" ? "bg-black text-white" : "bg-gray-300"}`}>
          All
        </button>
        <button onClick={() => handleGenderFilter("Men")} className={`p-2 px-4 rounded-lg ${filterGender === "Men" ? "bg-black text-white" : "bg-gray-300"}`}>
          Men
        </button>
        <button onClick={() => handleGenderFilter("Women")} className={`p-2 px-4 rounded-lg ${filterGender === "Women" ? "bg-black text-white" : "bg-gray-300"}`}>
          Women
        </button>
        <button onClick={() => handleGenderFilter("Kids")} className={`p-2 px-4 rounded-lg ${filterGender === "Kids" ? "bg-black text-white" : "bg-gray-300"}`}>
          Kids
        </button>
      </div>

      {/* Product Display */}
      <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
                onClick={() => navigate(`/product/short/${product.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg ">
                  <img src={product.image} className="w-full h-72 object-cover rounded-lg" alt={product.name} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                    Click to see more
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-bold text-gray-800">{product.name}</h1>
                <p className="text-gray-500 mt-2">{product.category}</p>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{product.description}</p>

                <button className="mt-6 w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-colors">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
}

export default Cap;
