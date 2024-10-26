function Discount() {
  const products = [
    { id: 1, name: "Sneakers", image: "im1.jpg" },
    { id: 2, name: "sabat", image: "im2.jpg" },
    { id: 3, name: "sabat", image: "im3.jpg" },
    { id: 4, name: "sabat", image: "im4.jpg" },
    { id: 5, name: "sabat", image: "im5.jpg" },
    { id: 6, name: "sabat", image: "im1.jpg" },
    { id: 7, name: "sabat", image: "im2.jpg" },
    { id: 8, name: "sabat", image: "im3.jpg" },
    
    { id: 10, name: "serwel", image: "serwel1.avif"},

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg min-w-[200px] h-[350px] flex-shrink-0 overflow-y-hidden"
        >
          <img
            src={product.image}
            className="w-full h-48 object-cover mb-4 mt-[10px]"
            alt={product.name}
          />
          <h1 className="text-xl font-semibold">{product.name}</h1>
          <button className="float-right bg-black text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Discount;
