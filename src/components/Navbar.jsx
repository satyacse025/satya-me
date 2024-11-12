import React, { useRef, useEffect, useContext, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import mainLogo from '../assets/main-logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {

    const [dark, setDark] = useState(false);
    const [hidden, setHidden] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    const hiddenShowHandler = () => {
        setHidden(!hidden);
        let menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }

    return (
        <div className='bg-[#1877f2] text-white dark:bg-black'>
             <div className='lg:w-5/6 mx-auto'>
        <nav className=" dark:bg-black w-full top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">

                    <img src={mainLogo} alt="" className='w-28' />

                </Link>
                <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse gap-3 items-center">


                    <button data-collapse-toggle="menu" type="button" className="inline-flex items-center w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <GiHamburgerMenu size="30px" color="white" onClick={() => hiddenShowHandler()} />
                    </button>
                    <span className='pl-0'><button onClick={() => darkModeHandler()}>
                        {

                            dark && <IoSunny size="20px" color="white" />
                        }
                        {
                            !dark && <IoMoon size="20px" />
                        }
                    </button></span>




                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="menu">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-black">
                        <li>
                            <Link to={"/"} className="block py-2 px-3 text-white hover:text-green-300 rounded 
                            md:bg-transparent md:text-white  md:p-0 md:dark:text-white " onClick={() => hiddenShowHandler()}>Home</Link>
                        </li>

                        <li>
                        <HashLink smooth to="/#skills-and-tools" className="block py-2 px-3 text-white hover:text-green-300 rounded 
                            md:bg-transparent md:text-white  md:p-0 md:dark:text-white " onClick={() => hiddenShowHandler()}>Skills and Tools</HashLink>
                        </li>

                        <li>
                        <HashLink smooth to="/#experience"  className="block py-2 px-3 text-white hover:text-green-300 rounded 
                            md:bg-transparent md:text-white  md:p-0 md:dark:text-white " onClick={() => hiddenShowHandler()}>Experience</HashLink>
                        </li>
                        <li>
                        <HashLink smooth to="/#projects"  className="block py-2 px-3 text-white hover:text-green-300 rounded 
                            md:bg-transparent md:text-white  md:p-0 md:dark:text-white " onClick={() => hiddenShowHandler()}>Projects</HashLink>
                        </li>
                        <li>
                        <HashLink smooth to="/#about"  className="block py-2 px-3 text-white hover:text-green-300 rounded 
                            md:bg-transparent md:text-white  md:p-0 md:dark:text-white " onClick={() => hiddenShowHandler()}>About</HashLink>
                        </li>
                        <li>
                        <HashLink smooth to="/#contact"  className="block py-2 px-3 text-white hover:text-green-300 rounded 
                            md:bg-transparent md:text-white  md:p-0 md:dark:text-white " onClick={() => hiddenShowHandler()}>Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        </div>
    )
}
