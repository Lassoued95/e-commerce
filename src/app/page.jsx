"use client";
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";
import Home from "./hom/Home.jsx";
import Discount from "./Discount/Discount.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        {/* Afficher About en haut sur toutes les pages */}
        <About />

        {/* Routes : le contenu change en fonction de la route */}
        <Routes>
          <Route path="/" element={<Home />} />
    
          <Route path="/Discount/Discount" element={<Discount />} />
           </Routes>

        {/* Afficher Product et Discount sur toutes les pages */}
           <Product />

        {/* Footer visible sur toutes les pages */}
        <footer className="w-full p-4 bg-black text-white text-center">
          <p>© 2024 L&B Bazaar. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
}
