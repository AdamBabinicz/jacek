import React from "react";
import Hero from "../components/Hero";
import Image from "../images/2.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Hero image={Image} title="Ania" desc="Morskie Oko" />
    </motion.div>
  );
};

export default Services;
