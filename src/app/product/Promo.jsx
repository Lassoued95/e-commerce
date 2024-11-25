import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/cartContext";

export const promoProducts = [
  {
    id: 73,
    name: "Sammuray Shoes",
    description: "Comfortable and stylish shoes for everyday wear.",
    originalPrice: "99.99",
    price: "89.99",
    image: "/glasses3.jpg",
  },
  {
    id: 74,
    name: "Adventure Backpack",
    description: "Perfect for your next outdoor trip.",
    originalPrice: "89.99",
    price: "79.99",
    image: "/hoodie4.png",
  },
  {
    id: 75,
    name: "Classic Watch",
    description: "Timeless design, perfect for any occasion.",
    originalPrice: "159.99",
    price: "149.99",
    image: "/shoes2.png",
  },
];

function Promo() {
  const navigate = useNavigate();
  const { timeLeft } = useCart(); // Retrieve timeLeft from CartContext

  if (!timeLeft) {
    return (
      <div className="promo-expired text-center">
        Promotion has ended!
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      {/* Promo Header */}
      <h2 className="text-4xl font-bold text-center mb-6 text-black uppercase">
        Featured Products
      </h2>

      {/* Countdown Timer */}
      <div className="text-center text-lg font-bold mb-10 text-red-600 flex justify-center items-center space-x-4">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        {promoProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <span className="text-gray-500 line-through mr-2">
                  ${product.originalPrice}
                </span>
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
              </div>
              <button
                onClick={() => navigate(`/product/promo/${product.id}`)}
                className="bg-yellow-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 ease-in-out"
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Countdown Unit Component
function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-4xl font-bold bg-yellow-400 text-white w-16 h-16 rounded-full flex items-center justify-center transition-transform transform scale-100"
        key={value}
      >
        {value}
      </div>
      <div className="text-sm mt-2">{label}</div>
    </div>
  );
}

export default Promo;
