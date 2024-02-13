"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion";

const links = [
  { key: 0, title: "Home", link: "#" },
  { key: 1, title: "About", link: "#about" },
  { key: 2, title: "Experience", link: "#experience" },
  { key: 3, title: "Projects", link: "#project" },
  { key: 4, title: "Contact", link: "#contact" },
];

const itemVariants  = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0, 
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
 const variants = {
    open: {
       transition:{
        staggerChildren: 0.1
    } 
  },
    closed: { 
      transition:{
        staggerChildren: 0.05,
        staggerDirection: -1
    } 
     },
    }
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 


  return (
    <nav className="  text-white p-4 sticky top-0 z-50">

  <div className="container mx-auto flex justify-between items-center">
    <div>
      <a href="#" className="text-3xl font-bold hover:text-gray-500 ">{"</>"}</a>
    </div>
    <div className="hidden md:block space-x-4 ">
    {links.map((e) => (
            
            <Link href={e.link} className="hover:text-gray-500" key={e.key} >
              {e.title}
            </Link>
          ))}
    </div>
          {isMenuOpen && (
            
        <motion.div  variants={{open: {opacity: 1 }, closed: {opacity:0}, }}   transition={{ duration: .75 }}  initial="closed" animate={isMenuOpen?"open":"closed"} className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-5 text-3xl text-white  bg-gradient-to-b from-[#0c0c1d] to-blue-950 md:hidden z-50">

          {links.map((e) => (
            <motion.div key={e.key} variants={itemVariants} initial="closed" animate={isMenuOpen?"open":"closed"} whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <Link href={e.link} className="hover:text-gray-500" 
            onClick={()=>setIsMenuOpen(()=>false)}

            >
              {e.title}
            </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
      {/*Smaall screen  Toggle  toggle*/}
      <div
        className="relative z-50 flex flex-col justify-between w-10  gap-2 md:hidden hover:cursor-pointer hover:text-gray-500"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
     <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={false}
      animate={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
     >
      {isMenuOpen ? <motion.line initial={{ opacity: 0 }} animate={{ opacity: 1 }} x1={18} y1={6} x2={6} y2={18} /> : <line x1={3} y1={12} x2={21} y2={12} />}
      {!isMenuOpen && <motion.line initial={{ opacity: 0 }} animate={{ opacity: 1 }} x1={3} y1={6} x2={21} y2={6} />}
      {isMenuOpen ? <motion.line initial={{ opacity: 0 }} animate={{ opacity: 1 }} x1={6} y1={6} x2={18} y2={18} /> : <line x1={3} y1={18} x2={21} y2={18} />}
    </motion.svg>
 


        {/* <motion.div
          animate={{
            rotate: isMenuOpen?-45:0,
            
          }}
          className={`w-full rounded h-1 bg-white origin-right`}
        ></motion.div>
        <motion.div
         animate={{
          opacity: isMenuOpen?0:1,
          
        }}
          className={`w-full rounded h-1 bg-white origin-left`}
        ></motion.div>
        <motion.div 
         animate={{
          rotate: isMenuOpen?45:0,
          
        }}
        className={`w-full rounded h-1 bg-white origin-right`}></motion.div> */}
      </div>
  </div>
</nav>
  );
}
 
