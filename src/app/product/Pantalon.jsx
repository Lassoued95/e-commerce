import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


export const productsP = [
  { id: 49, name: "Nike Sportswear Air", image: "/pants1.png", price:"69.9",category_prod:'pant', category: "Men", description: "Crafted with stretchy woven material, these Nike Tech pants offer you ease of movement and adjustability. The wide-leg cut is paired with bungee locks at the ankles that let you switch up the fit." },
  { id: 50, name: "Nike ACG", image: "/pants2.jpg", price:"69.9", category_prod:'pant', category: "Women", description: "These loose fitting, straight leg pants take you from work to the weekend in crisp, clean style. They're made with supersoft heavyweight canvas, a durable material that stands up to whatever you throw at them." },
  { id: 51, name: "Nike Tech", image: "/pants3.png",  price:"59.9",category_prod:'pant', category: "Men", description: "Designed for durability, these carpenter pants are made with heavyweight cotton twill that stands up to routine wear. Their relaxed fit and numerous pockets give them a classic, functional feel." },
  { id: 52, name: "Nike Club Fleece", image: "/pants4.png", price:"129.9", category_prod:'pant', category: "Men", description: "Can you believe it's already been 10 years of Tech Fleece? We’re celebrating the occasion with the timeless tailored design you know in a new color palette inspired by natural minerals. Our premium, smooth-on-both-sides fleece feels warmer and softer than ever, while keeping the same lightweight build you love. Complete your look with the matching jacket or your favorite top. The future of fleece starts here." },
  { id: 53, name: "Nike Club", image: "/pants5.jpg",  price:"69",category_prod:'pant', category: "Kids", description: "Rooted in the origins of our iconic Air technology, these pants embrace the same commitment to comfort that sets Nike Air apart. The woven cotton fabric is washed for softness and comfort that keeps you cool. Designed with some extra room through the seat and thighs, they also offer an elastic and drawstring waistband for easy entry and removal." },
  { id: 54, name: "Nike Floral Fleece", image: "/pants6.jpg", price:"119.9", category_prod:'pant', category: "Women", description: "These pants pair the clean aesthetic of Tech with a roomy fit for a relaxed vibe. Our premium, lightweight fleece–smooth both inside and out–gives you plenty of warmth without adding bulk." },
  { id: 55, name: "Nike Sportswear Essentials", image: "/pants7.png",  price:"69.9",category_prod:'pant', category: "Men", description: "Go big on comfort with these spacious Club Fleece pants. Its midweight, loopback fabric offers a soft-but-breathable feel that's smooth on the outside and soft on the inside." },
  { id: 56, name: "Nike Sportswear Essential", image: "/pants8.png", price:"99.9", category_prod:'pant', category: "Men", description: "Lightweight and ready for whatever, these woven nylon pants have a water-repellent finish to help you stay dry when rain rolls in. Plus, elastic drawcords at the hem give you styling power. How will you wear 'em?" },
];
function Pantalon() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const productRef = useRef(null);
 
  const navigate = useNavigate();

 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle gender filtering
  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  // Filter products based on search term and category
  const filteredProducts = productsP.filter((product) => {
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

      {/* Gender Filter Buttons */}
      <div className="flex space-x-4 mb-5">
        {["", "Men", "Women", "Kids"].map((gender) => (
          <button
            key={gender}
            onClick={() => handleGenderFilter(gender)}
            className={`p-2 px-4 rounded-lg ${
              filterGender === gender ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            {gender || "All"}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div className="w-full">
        <div ref={productRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
            >
              <div className="relative overflow-hidden rounded-lg" onClick={() => navigate(`/product/pants/${product.id}`)}>
                <img src={product.image} className="w-full h-72 object-cover rounded-lg" alt={product.name} />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                  Click to see more
                </div>
              </div>

              <h1 className="mt-4 text-xl font-bold text-gray-800">{product.name}</h1>
              <h1 className="mt-4 text-xl font-bold text-gray-800">{product.price}{"$"}</h1>
              <p className="text-gray-500 mt-2">{product.category}</p>
              <p className="text-gray-700 text-sm mt-1 line-clamp-3">{product.description}</p>

             
             
               
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pantalon;
