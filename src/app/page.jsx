"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app.jsx"; // Assure-toi que le chemin est correct
import About from "./navbar/About.jsx";
import Promo from "./product/Promo.jsx";
import Product from "./product/Product.jsx";
import Confirmation from "./confirmation/Confirmation.jsx"; // Assure-toi que le chemin est correct
import Contact from "./contact/Contact.jsx";
import { CartProvider } from './cart/cartContext';

import Shoes from "./product/Shoes.jsx";
import Jacket from "./product/Jacket.jsx";
import Hoodie from "./product/Hoodie.jsx";
import Bag from "./product/Bag.jsx";
import ContactForm from "./product/ContactFrom.jsx";

import Cap from "./product/Cap.jsx";
import Pantalon from "./product/Pantalon.jsx";
import Glasses from "./product/Glasses.jsx";
import Short from "./product/Short.jsx";
import Product_Details from "./product/Product_Details.jsx";
import CartPage from "./product/CartPage.jsx";



import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const App = () => {
    return (
        <>
            <Router>

  
            <CartProvider>
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
                   <Route path="/order-sammuray" element={<Promo />} />
                    <Route  path="/contact/Contact" element={<Contact/>}/>
 
                    <Route path="/product/shoes" element={<Shoes/>} />
                    <Route path="/product/jacket" element={<Jacket/>} />
                    <Route path="/product/hoodie" element={<Hoodie/>} />
                    <Route path="/product/bag" element={<Bag />} />
                    <Route path="/product/bag/:id" element={<Product_Details />} />
                    <Route path="/product/shoes/:id" element={<Product_Details />} />
                    <Route path="/product/jacket/:id" element={<Product_Details />} />
                    <Route path="/product/hoodie/:id" element={<Product_Details />} />
                    <Route path="/product/contactform" element={<ContactForm />} />

                    <Route  path="/product/cap" element={<Cap/>}/>
                    <Route  path="/product/pants" element={<Pantalon/>}/>
                    <Route  path="/product/glasses" element={<Glasses />}/>
                    <Route  path="/product/shorts" element={<Short/>}/>
                   

                    <Route path="/product/cap/:id" element={<Product_Details message="Hello from parent!" />} />
                    <Route path="/product/pants/:id" element={<Product_Details message="Hello from Pants parent!" />} />
                    <Route path="/product/glasses/:id" element={<Product_Details message="Hello from glasses parent!" />} />
                    <Route path="/product/short/:id" element={<Product_Details message="Hello from shorts parent!" />} />
                    <Route path="/confirmation/Confirmation" element={<Confirmation />} />
                    <Route path="/product/promo/:id" element={<Product_Details />} />
                    
                    <Route path="/product/CartPage" element={<CartPage />} />
                    <Route path="/product/ContactFrom" element={<ContactForm/>} />
                   

                </Routes>
                </CartProvider>
                
            </Router>

           
 
            <footer className="w-full bg-black text-black py-8 mt-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center justify-center mb-4 md:mb-0">
      <span className="text-lg font-semibold">L&B Bazaar</span>
    </div>

    {/* Links */}
    <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start">
      <a href="#" className="hover:text-gray-400 transition">About</a>
      <a href="#" >
        <>
        <p className="hover:text-gray-400 transition" > Categories</p>
        <div className="   flex-wrap gap-6">
        <p>Clothing</p>
        <p>Lingerie</p>
        <p>FootWear</p>
        <p>Hand Bag</p>
        </div>
        </>

      </a>
      <a href="#" className="hover:text-gray-400 transition">Informations</a>
      <a href="#" className="hover:text-gray-400 transition">Contact</a>
    </div>

    {/* Social Media */}
    <div className="flex items-center gap-4 mt-4 md:mt-0">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition"
        aria-label="Twitter"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
        aria-label="GitHub"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition"
        aria-label="Facebook"
      >
        <FaFacebook size={20} />
      </a>
      <a
       
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition"
        aria-label="Dribbble"
      >
        
      </a>
    </div>
  </div>

  {/* Bottom Row */}
  <div className="border-t border-gray-600 mt-6 pt-4 flex justify-between text-sm opacity-70">
    <p>© 2024 L&B Bazaar. All rights reserved.</p>
    <div className="flex items-center gap-2">
      <span>English</span>
      <span className="cursor-pointer">&#9660;</span> {/* Dropdown Arrow */}
    </div>
  </div>
</footer>



                   
                   
                   

                    
            
        </>
    );
};

export default App;