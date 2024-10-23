import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-600 p-4'>
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold">My Website</h1>
            <ul className="flex space-x-6">
                <li><a href="#about" className="text-white hover:text-gray-200">About</a></li>
                <li><a href="#services" className="text-white hover:text-gray-200">Services</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-200">Contact Me</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header