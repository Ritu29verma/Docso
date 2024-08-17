import React from 'react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  return (
    <div>
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
 
        <div className="text-white font-bold text-lg">
          <img src={logo} alt="Logo" className="h-10 inline-block mr-2" />
          Docos
        </div>

        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-blue-300"><a href="#">Home</a></li>
          <li className="hover:text-blue-300"><a href="#">About</a></li>
          <li className="hover:text-blue-300"><a href="#">Contact</a></li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="text-blue-600 bg-white px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300">Login</button>
          <button className="text-white border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300">Logout</button>
        </div>

      </div>
    </nav>
      <div className='h-8 bg-white'></div>
      </div>
  );
}
