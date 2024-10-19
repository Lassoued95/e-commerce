
import About from "./navbar/About.jsx";
import Product from "./product/Product.jsx";

export default function Home() {
  
  return (

    <div className="min-h-screen bg-gray-100">
      {/* About Section */}
      <About />
    
        <img 
          src="air.png"
          className="ml-[55%] h-[450px] animate-sabat "
        />
      <div class="bg-black text-center py-20 mt-[-37%] h-[450px] animate-zoomIn animate-font overflow-x-hidden">
  <h1 class="text-4xl md:text-6xl font-bold text-white tracking-wide uppercase mb-4">
    Step Into Comfort and Style
  </h1>
  <p class="text-lg md:text-2xl text-gray-200 mb-6">
    Discover the latest collections designed for every adventure.
  </p>
  <button class="mt-4 bg-white text-yellow-400  font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    Shop Now
  </button>
</div>

      

      {/* Image Section */}
      {/*<img
        src="bg3.jpg"
        className="  mt-4"
        alt="Background"
      />*/}
      {/* Product Section */}
      <section id="prod">
      <Product />
      </section>

      {/* Footer Section */}
      <footer className="w-full p-4 bg-black text-white text-center">
        <p>© 2024 L&B Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
}
