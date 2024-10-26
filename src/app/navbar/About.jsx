"use clinet";
import React from "react";
import { useNavigate } from "react-router-dom";
function About(){

  const navigate=useNavigate();

    return(
     <>
  <div className="w-full flex justify-between items-center mt-0 bg-black text-slate-50 py-4 px-8">
    <h1 className="text-2xl">L&B Bazaar</h1>
    <nav className="flex space-x-8 ">
    <a
      onClick={() => navigate("/")}
        href="#home"
        className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
      >
        Home
      </a>
      <a
      onClick={() => navigate("/show-products")}
        href="#prod"
        className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
      >
        Products
      </a>
      <a
        href="#cart"
        className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
      >
        Cart
      </a>
      <a
        href="#contact"
        className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
      >
        Contact
      </a>
    </nav>
       
  </div>
 
</>

    
    );
}
export default About;