// import React from "react";
// import Hero from "../components/Hero";
// import Image from "../images/jacek.jpg";
// import { motion } from "framer-motion";
// import { animationOne, transition } from "../animations";

// const Home = () => {
//   return (
//     <motion.div
//       initial="out"
//       animate="in"
//       exit="out"
//       variants={animationOne}
//       transition={transition}
//     >
//       <Hero image={Image} title="Jacek" desc="Morskie Oko" />
//     </motion.div>
//   );
// };

// export default Home;

// Home.js
import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";
import { Data } from "./Data"; // Importujemy dane z Data.js
import Hero from "../components/Hero";

const Home = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      {Data.home.map((item, index) => (
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

export default Home;
