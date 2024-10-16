import React from "react";
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* About Section */}
      <About />
      <div className="w-[90%] h-[400px] bg-slate-200  ml-14 mt-2  rounded-tr-[40px] rounded-bl-[40px]">
        
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
