import React from 'react'
import { useNavigate } from 'react-router-dom';

function home() {
  const navigate = useNavigate();
  return (
    <div>

    <img 
          src="air.png"
          className="ml-[55%] h-[55%] animate-sabat "
        />
      <div class="bg-black text-center py-20 mt-[-40%] h-[80vh] animate-zoomIn animate-font overflow-x-hidden">
  <h1 class="text-4xl md:text-6xl font-bold text-white tracking-wide uppercase mb-4">
    Step Into Comfort and Style
  </h1>
  <p class="text-lg md:text-2xl text-gray-200 mb-6">
    Discover the latest collections designed for every adventure.
  </p>
  
  <button onClick={() => navigate("/Discount/Discount")} class="mt-4 bg-white text-yellow-400  font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    Shop Now
  </button>
  
</div>


    </div>
  )
}

export default home;