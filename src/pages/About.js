import React from "react";
import Hero from "../components/Hero";
import Image from "../images/1.jpg";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Hero image={Image} title="Aneta" desc="Morskie Oko" />
    </motion.div>
  );
};

export default About;
