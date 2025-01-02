import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";
import { Data } from "./Data"; // Importujemy dane z Data.js
import Hero from "../components/Hero";

const Ania = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      {Data.ania.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <Hero image={item.image} title={item.title} desc={item.desc} />
        </div>
      ))}
    </motion.div>
  );
};

export default Ania;
