import React from "react";
// import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/jacek.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Hero image={Image} title="Jacek" desc="Morskie Oko" />
    </motion.div>
  );
};

export default Home;
