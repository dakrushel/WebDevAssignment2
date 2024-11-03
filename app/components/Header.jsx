import React from 'react'
import NavBar from './NavBar';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-gray-700 p-6 pt-2 pl-3 flex flex-col items-start'>
      <h1 className="text-white text-3xl font-bold border-green-500">
        <Link href="/" className="hover:text-blue-700">
        School Academy Institute Student Manager
        </Link>
        </h1>
      <NavBar />
    </header>
  );
};

export default Header