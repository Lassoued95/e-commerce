import React from "react";
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* About Section */}
      <About />

      {/* Image Section */}
      <img
        src="bg3.jpg"
        className="w-[100%] h-[30%]"
        alt="Background"
      />

      {/* Product Section */}
      <Product />

      {/* Footer Section */}
      <footer className="w-full p-4 bg-blue-500 text-white text-center">
        <p>© 2024 Mohamed Lassoued. All rights reserved.</p>
      </footer>
    </div>
  );
}
