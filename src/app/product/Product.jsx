import React from "react";
import { useNavigate } from "react-router-dom";

export const products = [
  { id: 1, name: "shoes", image: "shoes_prod.png" },
  { id: 2, name: "jacket", image: "jacket_prod.png" },
  { id: 3, name: "hoodie", image: "hoodie_prod.png" },
  { id: 4, name: "bag", image: "bag_prod.png" },
  { id: 5, name: "cap", image: "cap1.png" },
  { id: 6, name: "pantalon", image: "pantalon.png" },
  { id: 7, name: "glass", image: "glass_prod.jpeg" },
  { id: 8, name: "children_prod", image: "children_prod.png" },
];

function Product() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 mt-[-10%]">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-lg min-w-[50%] h-[100%] flex-shrink-0"
          >
            <div
              className="relative group cursor-pointer"
              onClick={() => {
                switch (product.name) {
                  case "shoes":
                    navigate("/product/shoes");
                    break;
                  case "jacket":
                    navigate("/product/jacket");
                    break;
                  case "hoodie":
                    navigate("/product/hoodie");
                    break;
                  case "bag":
                    navigate("/product/bag");
                    break;
                  default:
                    break;
                }
              }}
            >
              <img
                src={product.image}
                className="w-full h-65 object-cover mb-4 mt-3"
                alt={product.name}
              />
            
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to see more
              </div>
            </div>
            <h1 className="text-xl font-semibold">{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
