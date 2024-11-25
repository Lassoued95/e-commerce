import React, { useContext } from "react";
import CartContext from "../cart/cartContext";
import { useNavigate } from "react-router-dom";

const cartPage = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price) || 0; // Conversion en nombre
      return total + price * (item.quantity || 1); // Quantité par défaut : 1
    }, 0).toFixed(2); 
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => {
            const price = Number(item.price) || 0; // Conversion en nombre
            const quantity = item.quantity || 1; // Quantité par défaut : 1
            return (
              <div key={index} className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                {/* Image du produit */}
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />

                <div className="flex-1 ml-4">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
                </div>

             
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border rounded">{quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

              
                <p className="text-xl font-semibold text-gray-700">
                  ${(price * quantity).toFixed(2)}
                </p>

              
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            );
          })}

       
          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">
              Total: <span className="text-green-500">${calculateTotal()}</span>
            </h2>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/product/contactform")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
            Buy Now!
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700">Your cart is empty!</p>
      )}
    </div>
  );
};

export default cartPage;