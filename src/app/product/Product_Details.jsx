"use client";
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BagData } from './Bag';
import { HoodieData } from './Hoodie';
import { JacketData } from './Jacket';
import { Shoes as ShoesData } from './Shoes';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { products } from './Cap';
import { productsP } from './Pantalon';
import { productsG } from './Glasses';
import { productsSh } from './Short';

const Product_Details = () => {
    const { id } = useParams();
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();

    let product = BagData.find((product) => product.id === parseInt(id))
        || HoodieData.find((product) => product.id === parseInt(id))
        || JacketData.find((product) => product.id === parseInt(id))
        || ShoesData.find((product) => product.id === parseInt(id))
        || productsP.find((product) => product.id === parseInt(id))
        || productsG.find((product) => product.id === parseInt(id))
        || products.find((product) => product.id === parseInt(id))
        || productsSh.find((product) => product.id === parseInt(id));

    if (!product) {
        return <p className="text-center text-lg text-gray-700">Product not found</p>;
    }

    const handleAddToCart = () => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex(item => item.id === productId);
            if (index !== -1) {
                const updatedCart = [...prevCart];
                updatedCart.splice(index, 1);
                return updatedCart;
            }
            return prevCart;
        });
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
            {/* Product Details Container */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row max-w-4xl w-full mx-4">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full max-h-88 object-cover rounded-xl shadow-md"
                        aria-label={`Image of ${product.name}`}
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide text-center md:text-left">
                        {product.name}
                    </h1>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl font-semibold text-gray-700">
                                <span className="uppercase text-gray-500">Category:</span> {product.category}
                            </p>
                            <p className="text-lg font-semibold text-green-600">Available: Yes</p>
                        </div>
                        <p className="text-lg text-gray-500 leading-relaxed mb-4">
                            {product.description || "This is a great product! (You can add more detailed description here.)"}
                        </p>
                        <p className="text-lg text-gray-700 font-semibold mb-4">Price: ${product.price || "99.99"}</p>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-yellow-500 text-lg">★★★★☆</span>
                            <span className="text-gray-600">(4.5/5)</span>
                        </div>
                    </div>
                    
                    <button
                        onClick={() => navigate('/product/ContactFrom')}
                        className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg"
                    >
                        Buy Now
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Shopping Cart Icon */}
            <div onClick={toggleCart} className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white shadow-lg p-3 rounded-full cursor-pointer">
                <FaShoppingCart className="text-blue-600 text-2xl" />
                <span className="text-xl font-bold text-gray-800">{cart.length}</span>
            </div>

            {/* Cart Sidebar */}
            {isCartOpen && (
                <div className="fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg p-8 overflow-y-auto z-50">
                    <button onClick={toggleCart} className="text-red-600 font-bold text-lg mb-4">
                        Close
                    </button>
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Your Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="flex items-center mb-4 border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded mr-4" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-gray-600">${item.price || "99.99"}</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 font-bold"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Product_Details;
