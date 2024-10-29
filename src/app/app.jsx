"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const navigate1 = useNavigate();

    return (
        <div className="min-h-screen">
         
     
    
          <img 
            src="air.png"
            className="ml-[55%] h-[55%] animate-sabat"
          />
    
          {/* Promo Section */}
          <div className="bg-black text-center py-20 mt-[-40%] h-[80vh] animate-zoomIn  overflow-x-hidden">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide uppercase mb-4 animate-font">
              Step Into Comfort and Style
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-6 animate-font">
              Discover the latest collections designed for every adventure.
            </p>
            <button 
              onClick={() => navigate("/order-sammuray")}
              className="mt-4 bg-white text-yellow-400 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>
           <div>
            
          </div>
        </div>
      );
    
};

export default Home;
