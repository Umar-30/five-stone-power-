"use client";
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { IoBookOutline, IoCalendarNumberOutline, IoHomeOutline, IoSearch } from "react-icons/io5";
import { LuNotebookPen } from 'react-icons/lu';
import { RiInboxArchiveLine } from 'react-icons/ri';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-cyan-400 to-yellow-600 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-black text-3xl font-bold font-[Playfair_Display]">
            Five Stone Power
          </a>
          <div className="hidden md:flex">
            <a href="/" className="text-black flex hover:text-white mx-2">
            <IoHomeOutline className="w-5 h-5 mr-2" /> Home
            </a>
            <a href="/about" className="text-black flex hover:text-white mx-2">
              <RiInboxArchiveLine className="w-5 h-5 mr-2" /> About
            </a>
             <a href="/ministries" className="text-black flex hover:text-white mx-2">
              <LuNotebookPen className="w-5 h-5 mr-2" /> services
            </a>
             <a href="/course" className="text-black flex hover:text-white mx-2">
              <IoBookOutline className="w-5 h-5 mr-2" /> Courses
            </a>
             {/* <a href="/events" className="text-black flex hover:text-white mx-2">
              <IoCalendarNumberOutline className="w-5 h-5 mr-2" /> Events
            </a> */}
            <a href="/contact" className="text-black flex hover:text-white mx-2">
            <FiPhone className="w-5 h-5 mr-2" /> Contact
            </a>
            <a href="/allBlog" className="text-black flex hover:text-white mx-2">
              <IoSearch  className="w-5 h-5 mr-2" /> Blogs
            </a>
          </div>
          <button
            className="md:hidden text-black hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden fixed inset-0 flex z-50">
            <div className="flex-1 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
            <div className="bg-gradient-to-r from-yellow-600 to-cyan-400 w-64 h-full p-4 fixed right-0">
              <button
                className="text-gray-300 hover:text-white focus:outline-none mb-4"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <a href="/" className="block text-gray-300 hover:text-white px-2 py-1 text-lg items-center">
                <IoHomeOutline className="w-5 h-5 mr-2" /> Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white px-2 py-1 text-lg items-center">
                <RiInboxArchiveLine className="w-5 h-5 mr-2" /> About
              </a>
               <a href="/ministries" className="block text-gray-300 hover:text-white px-2 py-1 text-lg items-center">
              <LuNotebookPen className="w-5 h-5 mr-2" /> Services
            </a>
             <a href="/course" className="block text-gray-300 hover:text-white px-2 py-1 text-lg items-center">
              <IoBookOutline className="w-5 h-5 mr-2" /> Courses
            </a>
              <a href="/contact" className="block text-gray-300 hover:text-white px-2 py-1 text-lg items-center">
                <FiPhone  className="w-5 h-5 mr-2" /> Contact
              </a>
              <a href="/allBlog" className="block text-gray-300 hover:text-white px-2 py-1 text-lg items-center">
                <IoSearch className="w-5 h-5 mr-2" /> Blogs
              </a>
              
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
 
