import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <header className="flex justify-between px-7 py-5 bg-black ">
            <a className="font-semibold text-[#b8b8b8] text-4xl" href="#">My Portfolio</a>
            <nav className="hidden md:block">
                <ul className="flex gap-6 font-medium text-1xl text-[#b8b8b8]">
                    <li className='hover:text-white'><a href="/">Home</a></li>
                    <li className='hover:text-white'><a href="/#about">About</a></li>
                    <li className='hover:text-white'><a href="/#projects">Projects</a></li>
                    <li className='hover:text-white'><a href="/#resume">Resume</a></li>
                    <li className='hover:text-white'><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden ">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mt-10 mobile-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><IoMdMenu className='text-white h-5' /></button>
        </header>
    )
}

export default Header