import React from "react";
import About from "./navbar/About.jsx";

export default function Home() {
  const products=[
    {
    id:1,
    name:'project1',
    image:'typescript.png',
  },
  {
    id:2,
    name:'project2',
    image:'typescript.png',
  },
  {
    id:3,
    name:'project3',
    image:'typescript.png',
  },
  {
    id:4,
    name:'project4',
    image:'typescript.png',
  },
  {
    id:5,
    name:'project5',
    image:'typescript.png',
  },
]


  return (
    <div className="min-h-screen bg-gray-100 justify-center mt- -50">
     
     <About/>


    
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.image} className="w-full h-48 object-cover mb-4"></img>
          <h1 className="text-xl font-semibold">{product.name}</h1>
          </div>
        ))}
        
       </div>
      

      {/* Footer Section */}
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2024 Mohamed Lassoued. All rights reserved.</p>
      </footer>
    
    </div>
  );
}
