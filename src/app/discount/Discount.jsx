"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

function Discount() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Thank you for your order. You will receive a confirmation email shortly.
            </p>
            <button
                onClick={() => navigate("/")} // Next.js navigation
                className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                Go back!
              
            </button>
        </div>
    );
}

export default Discount;