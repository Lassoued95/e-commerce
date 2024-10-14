"use clinet";
import React from "react";
function About(){
    return(
    <header className=" bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">L&B Bazaar</h1>
          <nav>
            <a href="#prod" className="px-4">Products</a>
            <a href="#cart" className="px-4">Cart</a>
            <a href="#contact" className="px-4">Contact Us</a>
          </nav>
        </div>
      </header>
    );
}
export default About;