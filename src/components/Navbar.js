import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Hammad Ahmad</div>
      <div className="hidden md:flex space-x-6">
        <a href="#projects" className="hover:text-gray-400">Selected Projects</a>
        <a href="#about" className="hover:text-gray-400">About Me</a>
        <a href="#resume" className="hover:text-gray-400">Resume</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <button className="md:hidden block text-3xl">&#9776;</button>
    </nav>
  );
};

export default Navbar;
