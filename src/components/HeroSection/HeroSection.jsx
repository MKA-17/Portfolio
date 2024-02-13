"use client"

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { accounts } from '@/utils/editableData';

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <header className="text-white h-screen flex items-center ">
      <motion.div className="container mx-auto text-center " variants={variants} initial="initial" animate="animate">
      <motion.h1 className="md:text-7xl text-4xl font-bold mb-10 hover:text-gray-500" variants={variants} initial="initial" animate="animate">
      <Link href={"#footer"}  >
          {"<>"}
        </Link>        
      </motion.h1>
      <motion.h1 className="md:text-7xl text-4xl font-bold mb-4" variants={variants} initial="initial" animate="animate">
          Greetings!
        </motion.h1>
        <motion.h1 className="md:text-7xl text-4xl font-bold mb-4" variants={variants} initial="initial" animate="animate">
          I'm M KHIZAR ASLAM
        </motion.h1>
        <motion.p className="text-2xl m3:text-4xl" variants={variants} initial="initial" animate="animate">
          Full Stack Developer 
        </motion.p>
        <motion.div className="flex justify-center space-x-4 py-2 px-4 mt-8" variants={variants} initial="initial" animate="animate">
          
          {accounts.map(e=><SocialIcon
          key={e.name}
            network={e.name}
            style={{ height: '35px', width: '35px' }}
            href={e.url}
            bgColor="#2a2a66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full"
            
          />)}
           
        </motion.div>
      </motion.div>
    </header>
  );
}
