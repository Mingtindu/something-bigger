import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">StudyMS</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-200">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-200">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-200">
            Clients
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-200">
            Contact Us
          </a>
        </li>
        <li>
          <button onClick={handleLoginClick} className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-blue-200">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
