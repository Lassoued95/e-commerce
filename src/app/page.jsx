"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app.jsx"; // Ensure the correct path
import About from "./navbar/About.jsx"
import Product from "./product/Product.jsx"
import Discount from "./discount/Discount.jsx"; // Ensure the correct path

const App = () => {
    return (
        <Router>
            <About/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show-products" element={<Product/>}/>
                <Route path="/order-sammuray" element={<Discount />} />
            </Routes>
        </Router>
    );
};

export default App;