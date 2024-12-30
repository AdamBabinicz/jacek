// import React from "react";
// import Hero from "../components/Hero";
// import Image from "../images/6.jpg";
// import { motion } from "framer-motion";
// import { animationThree } from "../animations";

// const Services = () => {
//   return (
//     <motion.div
//       initial="out"
//       animate="end"
//       exit="out"
//       variants={animationThree}
//     >
//       <Hero image={Image} title="Ania" desc="Morskie Oko" />
//     </motion.div>
//   );
// };

// export default Services;
// Services.js
import React from "react";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";
import { Data } from "./Data"; // Importujemy dane z Data.js
import Hero from "../components/Hero";

const Services = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      {Data.services.map((item, index) => (
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

export default Services;
