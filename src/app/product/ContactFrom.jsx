import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate=useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-5 space-y-4">
        <h2 className="text-xl font-bold text-center text-gray-800">Registration Form</h2>

      
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

       
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone number"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

     
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm" htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            placeholder="Size"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => navigate("/confirmation/Confirmation")}
        >
          Confirm
        </button>
      </form>
    </div>
  )
}

export default ContactForm
