import React, { useState, useEffect } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


import { IoMailUnreadOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="bg-[#1877f2] dark:bg-black"> <div>
       <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
        >
          ↑ Top
        </button>
      )}
    </div>
    <footer className="footer footer-center text-base-content rounded p-10 ">
    <span className='text-white dark:text-white'>
    
    <span className='font-semibold text-lg'>Satyajit Adhikary</span>
    <span className='tracking-tight text-lg'>Software Engineer | Full-Stack Developer</span>
    <span className='tracking-tight text-lg flex'><FaWhatsapp className='mt-1 mr-1'/>+88 017 49 090 971</span>
    <span className='tracking-tight text-lg flex'><IoMailUnreadOutline className='mt-2 mr-1'/>satyacse025@gmail.com</span>
    
    
    </span>
       
        <aside>
            <p className='text-white dark:text-white text-lg'>Copyright © {new Date().getFullYear()} - All right reserved by Satyajit™</p>
        </aside>
    </footer>
</div></div>
  )
}
