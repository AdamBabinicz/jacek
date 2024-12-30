// import React from "react";
// import Hero from "../components/Hero";
// import Image from "../images/1.avif";
// import { motion } from "framer-motion";
// import { animationTwo } from "../animations";

// const About = () => {
//   return (
//     <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
//       <Hero image={Image} title="Aneta" desc="Morskie Oko" />
//     </motion.div>
//   );
// };

// export default About;

// About.js
// About.js
import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";
import { Data } from "./Data"; // Importujemy dane z Data.js
import Hero from "../components/Hero";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      {Data.about.map((item, index) => (
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

export default About;
