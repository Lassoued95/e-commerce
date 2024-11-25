import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../cart/cartContext"; 

function About() {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext); 

    // Vérification que cartItems est défini et est un tableau
    const itemCount = Array.isArray(cartItems) ? cartItems.length : 0;

    return (
        <div className="w-full flex justify-between items-center mt-0 bg-black text-slate-50 py-4 px-8">
            <h1 className="text-2xl">L&B Bazaar</h1>
            <nav className="flex space-x-8">
                <a onClick={() => navigate("/")}
                    href="#prod"
                    className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
                >
                    Home
                </a>
                <a onClick={() => navigate("/contact/Contact")}
                    href="#contact"
                    className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
                >
                    Contact
                </a>
                <button 
                    onClick={() => navigate("/product/CartPage")} 
                    className="relative border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
                >
                    <FaShoppingCart className="text-blue-50-600 text-2xl" />
                    {itemCount > 0 && (
                        <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                            {itemCount}
                        </span>
                    )}
                </button>
            </nav>
        </div>
    );
}

export default About;