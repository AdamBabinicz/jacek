import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";
import { Data } from "./Data"; // Importujemy dane z Data.js
import Hero from "../components/Hero";

const Aneta = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      {Data.aneta.map((item, index) => (
        <Hero
          key={index}
          image={item.image}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </motion.div>
  );
};

export default Aneta;
