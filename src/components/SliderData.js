// import foto1 from "../images/1.jpg";
// import foto2 from "../images/2.jpg";
// import foto3 from "../images/3.jpg";
// import foto4 from "../images/4.jpg";
// import foto5 from "../images/5.jpg";

// export const SliderData = [
//   {
//     title: "jacek",
//     images: [foto1, foto2, foto3],
//   },
//   {
//     title: "aneta",
//     images: [foto4, foto5],
//   },
//   {
//     title: "default",
//     images: [foto1, foto3, foto5],
//   },
// ];

// import foto1 from "../images/1.jpg";
// import foto2 from "../images/2.jpg";
// import foto3 from "../images/3.jpg";
// import foto4 from "../images/4.jpg";
// import foto5 from "../images/5.jpg";

// export const SliderData = {
//   jacek: [{ image: foto5, desc: "Morskie Oko" }],
//   aneta: [
//     { image: foto2, desc: "Morskie Oko" },
//     { image: foto3, desc: "Morskie Oko" },
//   ],
//   ania: [{ image: foto4, desc: "Kwiaty" }],
//   default: [{ image: foto1 }, { image: foto3 }, { image: foto5 }],
// };
import foto1 from "../images/1.jpg";
import foto2 from "../images/2.jpg";
import foto3 from "../images/3.jpg";
import foto4 from "../images/4.jpg";
import foto5 from "../images/5.jpg";

// Struktura dedykowana dla Slidera
export const SliderData = {
  jacek: {
    images: [{ image: foto5, desc: "Nad morzem" }],
  },
  aneta: {
    images: [
      { image: foto2, desc: "Morskie Oko" },
      { image: foto3, desc: "Potok" },
    ],
  },
  ania: {
    images: [{ image: foto4, desc: "Kwiaty" }],
  },
  default: {
    images: [{ image: foto1 }, { image: foto3 }, { image: foto5 }],
  },
};
