"use client";
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SvgIcon } from '@mui/material';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar bg-purple-600 text-white fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
      <div className="logo text-2xl font-bold">Naxos</div>

      {/* Hamburger Button (Only visible on smaller screens) */}
      <button
        className="hamburger text-2xl cursor-pointer md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Navigation" 
      >
        ☰
      </button>

      {/* Mobile Menu (Slides in/out) */}
      <div
        className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } mobile-menu fixed top-16 left-0 w-64 h-full bg-gray-800 transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Home</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Feature</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Screenshot</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Support</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Pricing</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Blog</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">Contact</a>
        <a href="#" className="block px-4 py-2 text-white no-underline hover:bg-gray-700">
      <SvgIcon component={SearchIcon} className="inline-block mr-2" />
      <span className="sr-only">Search</span>
    </a>
      </div>

      {/* Desktop Menu */}
      <div className="menu hidden md:flex items-center text-base font-medium">
        <a href="#" className="text-white no-underline hover:underline mx-4">Home</a>
        <a href="#" className="text-white no-underline hover:underline mx-4">Feature</a>
        <a href="#" className="text-white no-underline hover:underline mx-4">Screenshot</a>
        <a href="#" className="text-white no-underline hover:underline mx-4">Support</a>
        <a href="#" className="text-white no-underline hover:underline mx-4">Pricing</a>
        <a href="#" className="text-white no-underline hover:underline mx-4">Blog</a>
        <a href="#" className="text-white no-underline hover:underline mx-4">Contact</a>
        <a href="#" className="block px-4 py-2 text-white no-underline">
        <SvgIcon component={SearchIcon} className="inline-block mr-2" />
        <span className="sr-only">Search</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
