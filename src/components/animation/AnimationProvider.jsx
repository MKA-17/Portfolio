"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function AnimationProvider({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // useEffect(()=>console.log(isInView), [isInView])

  
  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isInView?"animate":"initial"}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
