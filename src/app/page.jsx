"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app.jsx"; // Ensure the correct path
import About from "./navbar/About.jsx"
import Product from "./product/Product.jsx"
import Discount from "./discount/Discount.jsx"; // Ensure the correct path

const App = () => {
    return (
        <>
        <Router>
            <About/>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/order-sammuray" element={<Discount />} />
            </Routes>
            <Product/>
        </Router>
         {/* Footer Section */}
         <footer className="w-full p-4 bg-black text-white text-center">
            <p>© 2024 L&B Bazaar. All rights reserved.</p>
          </footer>
        </>
    );
};

export default App;
