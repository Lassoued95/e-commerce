"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app.jsx"; // Assure-toi que le chemin est correct
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";
import Discount from "./discount/Discount.jsx"; // Assure-toi que le chemin est correct
import Contact from "./contact/Contact.jsx";

const App = () => {
    return (
        <>
            <Router>
                {/* Afficher About en haut sur toutes les pages */}
                <About />
                
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Home />
                                {/* Afficher Product seulement sur la page d'accueil */}
                                <Product />
                            </>
                        } 
                    />
                    <Route path="/order-sammuray" element={<Discount />} />
                    <Route  path="/contact/Contact" element={<Contact/>}/>
                </Routes>

                {/* Footer Section visible sur toutes les pages */}
                <footer className="w-full p-4 bg-black text-white text-center">
                    <p>© 2024 L&B Bazaar. All rights reserved.</p>
                </footer>
            </Router>
        </>
    );
};

export default App;
