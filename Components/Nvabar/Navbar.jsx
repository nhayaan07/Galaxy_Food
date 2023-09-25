import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from './Navbar.module.css'

import React from 'react'

const Navbar = () => {
    const inputRef = useRef(null);
    const mobileRef = useRef(null);
    const activeClass = style.active ;
    const showMenu = () => {
mobileRef.current.classList.toggle(activeClass);
    };
    const closeMenu = () => {
        mobileRef.current.classList.remove(activeClass);
    }

console.log(activeClass)

  return (
   
<>
    <header className="bg-[--primary-color] fixed top-0 left-0 right-0 h-[6rem]" >
<nav className=" p-2 max-sm:px-5   py-4 flex justify-between items-center md:w-3/4 mx-auto
">
 

 {/* Mobile icon Start  */}
<div className="sm:hidden" ref={inputRef} onClick={showMenu}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-12 hover:opacity-70 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
</svg>
 
</div> 
 {/* Mobile icon end  */}


<div className="branding  md:block">
    <a className=" uppercase font-bold text-3xl text-white" href="#"> Galaxy Food</a>
</div>

{/* here is menu item code  */}
<div className="">
<ul className={`${style.mobile} gap-10 text-2xl uppercase font-bold text-white flex `} ref={mobileRef}>
    <li className="hidden max-sm:block"><img className="w-full object-cover" src="./img/logo2.png" alt="" /></li>
    <li className="hover:bg-zinc-900">About</li>
    <li className="hover:bg-zinc-900">Menu</li>
    <li className="hover:bg-zinc-900">Group</li>
    <li className="hover:bg-zinc-900">Contact</li>
    <li className="hover:bg-zinc-900 text-[--primary-color]
    flex justify-between sm:hidden
    " onClick={closeMenu}>Close Menu
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

    </li>

</ul>
</div>

<div className="right-nav">
    <button className="btn-default">Book Now</button>
</div>


</nav></header> 
<div className="mt-[6rem]"></div>
{/* this is for perfect position of navbar  */}






</> 
  )
}

export default Navbar