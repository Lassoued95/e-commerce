import React from "react";
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";
import Search from "./search/Search.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* About Section */}
      <About />
     <Search/>
        <img 
          src="air.png"
          className="ml-[55%] h-[450px] "
        />
      <div class="bg-black text-center py-20 mt-[-30%] h-[500px] animate-zoomIn">
  <h1 class="text-6xl md:text-6gxl font-bold text-white tracking-wide uppercase mb-4">
    Step Into Comfort and Style
  </h1>
  <p class="text-lg md:text-3xl text-gray-200 mb-6">
    Discover the latest collections designed for every adventure.
  </p>
  <button class="mt-4 bg-white text-yellow-800  font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    Shop Now
  </button>
</div>

     

      {/* Image Section */}
      {/*<img
        src="bg3.jpg"
        className="  mt-4"
        alt="Background"
      />*/}
      {/* Product Section */}
      <Product />

      {/* Footer Section */}
      <footer className="w-full p-4 bg-black text-white text-center">
        <p>© 2024 L&B Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
}
