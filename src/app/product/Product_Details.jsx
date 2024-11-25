import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BagData } from "./Bag";
import { HoodieData } from "./Hoodie";
import { JacketData } from "./Jacket";
import { Shoes as ShoesData } from "./Shoes";
import { products } from "./Cap";
import { productsP } from "./Pantalon";
import { productsG } from "./Glasses";
import { productsSh } from "./Short";
import{promoProducts}from "./Promo";
import { useCart } from "../cart/cartContext";
import ContactForm from "./ContactFrom";

const Product_Details = () => {
    const { id } = useParams(); // Get the product ID from the route parameters
    const [product, setProduct] = useState(null); // State to store the product data
    const navigate = useNavigate(); // Hook for programmatic navigation
    const { addToCart } = useCart(); // Function to add a product to the cart

    // Fetch the product data when the component mounts or when `id` changes
    useEffect(() => {
        const foundProduct =
            BagData.find((product) => product.id === parseInt(id)) ||
            HoodieData.find((product) => product.id === parseInt(id)) ||
            JacketData.find((product) => product.id === parseInt(id)) ||
            ShoesData.find((product) => product.id === parseInt(id)) ||
            productsP.find((product) => product.id === parseInt(id)) ||
            productsG.find((product) => product.id === parseInt(id)) ||
            products.find((product) => product.id === parseInt(id)) ||
            productsSh.find((product) => product.id === parseInt(id))||
            promoProducts.find((product) => product.id === parseInt(id));

        setProduct(foundProduct);
    }, [id]);

    // Display a message if the product is not found
    if (!product) {
        return <p className="text-center text-lg text-gray-700">Product not found</p>;
    }

    // Handle adding the product to the cart
    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row w-[70%] mx-4">
                {/* Product Image */}
                <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full max-h-88 object-cover rounded-xl shadow-md"
                        aria-label={`Image of ${product.name}`}
                    />
                </div>
                {/* Product Details */}
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
                        <p className="text-lg text-gray-700 font-semibold mb-4">Price: ${product.price}</p>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-yellow-500 text-lg">★★★★☆</span>
                            <span className="text-gray-600">(4.5/5)</span>
                        </div>
                    </div>
                    {/* Action Buttons */}
                   
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-700 hover:to-green-900 transition-all shadow-lg"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product_Details;
