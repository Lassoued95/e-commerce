"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app.jsx"; // Assure-toi que le chemin est correct
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";
import Discount from "./discount/Discount.jsx"; // Assure-toi que le chemin est correct
import Contact from "./contact/Contact.jsx";

import Shoes from "./product/Shoes.jsx";
import Jacket from "./product/Jacket.jsx";
import Hoodie from "./product/Hoodie.jsx";
import Bag from "./product/Bag.jsx";
import ContactFrom from "./product/ContactFrom.jsx";

import Cap from "./product/Cap.jsx";
import Pantalon from "./product/Pantalon.jsx";
import Glasses from "./product/Glasses.jsx";
import Children_prod from "./product/Short.jsx";
import Product_Details from "./product/Product_Details.jsx";



const App = () => {
    return (
        <>
            <Router>

  

                <About />
                
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Home />

                                <Product />
                            </>
                        } 
                    />
                    <Route path="/order-sammuray" element={<Discount />} />
                    <Route  path="/contact/Contact" element={<Contact/>}/>
 
                    <Route path="/product/shoes" element={<Shoes/>} />
                    <Route path="/product/jacket" element={<Jacket/>} />
                    <Route path="/product/hoodie" element={<Hoodie/>} />
                    <Route path="/product/bag" element={<Bag />} />
                    <Route path="/product/bag/:id" element={<Product_Details />} />
                    <Route path="/product/shoes/:id" element={<Product_Details />} />
                    <Route path="/product/jacket/:id" element={<Product_Details />} />
                    <Route path="/product/hoodie/:id" element={<Product_Details />} />
                    <Route path="/product/ContactFrom" element={<ContactFrom />} />
                      <Route  path="/product/cap" element={<Cap/>}/>
                    <Route  path="/product/pants" element={<Pantalon/>}/>
                    <Route  path="/product/glasses" element={<Glasses />}/>
                    <Route  path="/product/short" element={<Children_prod/>}/>
                    <Route path="/product/cap/:id" element={<Product_Details message="Hello from parent!" />} />
                    <Route path="/product/pants/:id" element={<Product_Details message="Hello from Pants parent!" />} />
                    <Route path="/product/glasses/:id" element={<Product_Details message="Hello from glasses parent!" />} />
                    <Route path="/product/short/:id" element={<Product_Details message="Hello from shorts parent!" />} />

                </Routes>

                
            </Router>
            <footer className="w-full p-4 bg-black text-white text-center mb-[-30%] ">
                    <p>© 2024 L&B Bazaar. All rights reserved.</p>
                </footer>

                   
                   
                   

                    
            
        </>
    );
};

export default App;