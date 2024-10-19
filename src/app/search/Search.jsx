"use client";
import React, { useState } from 'react';
import { products } from '../product/Product'; // Importing the products array

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter((products) =>
    products.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Search Input */}
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Products List - only show if search query exists and matches */}
      {searchQuery && (
        <ul className="mt-4 flex space-x-4  overflow-x-hidden   ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((products) => (
                <li key={products.id} className="border p-4 rounded-lg min-w-[200px] h-[250px] flex-shrink-0 overflow-y-hidden   ">
                <img src={products.image} alt={products.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold">{products.name}</h3>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
