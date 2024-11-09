"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

// Exporting products array
export const products = [
  { id: 1, name: "shoes", image: "shoes_prod.png" },
  { id: 2, name: "jacket", image: "jacket_prod.png" },
  { id: 3, name: "hoodie", image: "hoodie_prod.png" },
  { id: 4, name: "bag", image: "bag_prod.png" },
  { id: 5, name: "cap", image: "cap1.png" },
  { id: 6, name: "pants", image: "pantalon.png" },
  { id: 7, name: "glasses", image: "glasses555.jpg" },
  { id: 8, name: "shorts", image: "short1.png" },
];

function Product() {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    switch (id) {
      case 1:
        navigate("/product/shoes");
        break;
      case 2:
        navigate("/product/jacket");
        break;
      case 3:
        navigate("/product/hoodie");
        break;
      case 4:
        navigate("/product/bag");
        break;
      case 5:
        navigate("/product/cap");
        break;
      case 6:
        navigate("/product/pants");
        break;
      case 7:
        navigate("/product/glasses");
        break;
      case 8:
        navigate("/product/short");
        break;
      default:
        navigate("/product");
    }
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 mt-[0%] h-[100%]">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg min-w-[50%] h-[100%] flex-shrink-0 relative group"
            >
              {/* Image with overlay effect */}
              <div className="relative w-full h-60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                 
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-lg"  onClick={() => handleProductClick(product.id)}>
                  Click to see more
                </div>
              </div>
              <h1 className="text-xl font-semibold mt-4">{product.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
