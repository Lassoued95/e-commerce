"use client";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Product_Details from "../product/Product_Details.jsx";

// Exporting products array
export const productsG = [

  { id: 17, name: "Nike Show X1", image: "/glasses1.png" , category :"Men", description:"Sometimes it's hard to pull yourself away from the screen. The Nike Blue Light Collection features a premium lens coating that helps reduce blue light exposure for use at home, office and gaming on your digital devices." },
  { id: 18, name: "Nike Zeus", image: "/glasses2.png" , category :"Women",description:"A timeless classic for every day, the Nike Crescent I sunglasses utilize 20% recycled content by weight with a chunky, throwback design reminiscent of vintage shades. The smooth, square shape continues through angular beveled edges with minimalist logos at each temple etched in sleek, silver-tone hardware."},
  { id: 19, name: "Nike Circuit", image: "/glasses3.jpg" , category :"Men",description:"Reimagining sport shields for every day, the Nike Marquee Edge sunglasses offer panoramic views in an ultralight frame. The angular design accommodates a wide lens and has rubberized zones at the top bar, nose pad and temples to give you a grippy, stay-put fit while adding unexpected pops of bold color."},
  { id: 20, name: "Nike Athena", image: "/glasses4.jpg" , category :"Kids",description:"When your casual walk turns into a spontaneous run, find all-around comfort in the Nike Metal Fusion sunglasses. They're lightweight, durable and easy to get a locked-in fit with the adjustable, rubberized temple tips and nose pads for when the day suddenly cranks into high gear."},
  { id: 21, name: "Nike State", image: "/glasses5.jpg", category :"Women" ,description:" The Nike State  sunglasses are equally stylish as they are comfortable. These shades are vintage-inspired in looks with an oversized, rounded shape and built for ease with softly rubberized and adjustable temple tips that bend for effortless adjustability."},
  { id: 22, name: "Nike Essential Horizon", image: "/glasses6.jpg" , category :"Women",description:"Sometimes it's hard to pull yourself away from the screen. The Nike Essential Horizon Collection features a premium lens coating that helps reduce blue light exposure for use at home, office, and gaming on your digital devices."},
  { id: 23, name: "Nike Crescent", image: "/glasses7.png" , category :"Men",description:"With their square lenses and keyhole nose bridge design, you'll carve your own style path through those sunny days. Lightweight but durable, the nylon frame and slim profile provide the coverage and comfort you need for all-day adventures."},
  { id: 24, name: "Nike NV05 LB", image: "/glasses8.jpg" , category :"Women",description:"magine unrestricted vision in a wrap-tight fit with streetwear style. Reimagining sport shields for every day, the Marquee sunglasses offer panoramic views in an ultralight frame made from mixed materials. The rubberized zones at the top bar, nose pad and temples help give you a grippy, stay-put fit while adding unexpected pops of bold color."},
  
];

function Glasses() {
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [filterCategory, setFilterCategory] = useState(""); // Active category filter
  const productRef = useRef(null); // For scroll behavior
  const [filterGender, setFilterGender] = useState("");

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category filtering
  const handleCategoryFilter = (category) => {
    setFilterCategory(category);
  };
  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  // Filter products based on search term and category
  const filteredProducts= productsG.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? product.category === filterGender : true;
    return matchesSearch &&matchesGender;
  });
  const navigate=useNavigate();

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
        {/* Product Display */}
        <div className="w-full">
          <div ref={productRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
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
    </>
  );
}

export default Glasses;