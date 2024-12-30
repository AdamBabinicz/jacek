// import React, { useState } from "react";
// import "./Slider.css";
// import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
// import { motion } from "framer-motion";
// import { animationTwo } from "../animations";
// import ImgComp from "./ImgComp";
// import i1 from "../images/5.jpg";
// import i2 from "../images/5.jpg";
// import i3 from "../images/5.jpg";
// import i4 from "./images/16.jpg";
// import i5 from "./images/23.jpg";
// import i6 from "./images/19.jpg";
// import i7 from "./images/21.jpg";
// import i8 from "./images/20.jpg";
// import i9 from "./images/14.jpg";
// import i10 from "./images/13.jpg";
// import i11 from "./images/22.jpg";
// import i12 from "./images/8.jpg";
// import i13 from "./images/18.jpg";
// import i14 from "./images/15.jpg";
// import i15 from "./images/17.jpg";
// import i16 from "../images/gallery/47.jpg";
// import i17 from "../images/gallery/13.jpg";
// import i18 from "../images/gallery/21.jpg";
// import i19 from "../images/gallery/22.jpg";
// import i20 from "../images/gallery/23.jpg";
// import i21 from "../images/gallery/11.jpg";
// import i22 from "../images/gallery/25.jpg";
// import i23 from "../images/gallery/35.jpg";
// import i24 from "../images/gallery/14.jpg";
// import i25 from "../images/gallery/28.jpg";
// import i26 from "../images/gallery/26.jpg";
// import i27 from "../images/gallery/20.jpg";
// import i28 from "../images/gallery/33.jpg";
// import i29 from "../images/gallery/12.jpg";
// import i30 from "../images/gallery/39.jpg";
// import i31 from "../images/gallery/37.jpg";
// import i32 from "../images/gallery/30.jpg";
// import i33 from "../images/gallery/40.jpg";
// import i34 from "../images/gallery/41.jpg";
// import i35 from "../images/gallery/46.jpg";
// import i36 from "../images/gallery/42.jpg";
// import i37 from "../images/gallery/43.jpg";

// function Slider() {
//   let sliderArr = [
//     <ImgComp src={i1} />,
//     <ImgComp src={i2} />,
//     <ImgComp src={i3} />,
//     <ImgComp src={i4} />,
//     <ImgComp src={i5} />,
//     <ImgComp src={i6} />,
//     <ImgComp src={i7} />,
//     <ImgComp src={i8} />,
//     <ImgComp src={i9} />,
//     <ImgComp src={i10} />,
//     <ImgComp src={i11} />,
//     <ImgComp src={i12} />,
//     <ImgComp src={i13} />,
//     <ImgComp src={i14} />,
//     <ImgComp src={i15} />,
//     <ImgComp src={i16} />,
//     <ImgComp src={i17} />,
//     <ImgComp src={i18} />,
//     <ImgComp src={i19} />,
//     <ImgComp src={i20} />,
//     <ImgComp src={i21} />,
//     <ImgComp src={i22} />,
//     <ImgComp src={i23} />,
//     <ImgComp src={i24} />,
//     <ImgComp src={i25} />,
//     <ImgComp src={i26} />,
//     <ImgComp src={i27} />,
//     <ImgComp src={i28} />,
//     <ImgComp src={i29} />,
//     <ImgComp src={i30} />,
//     <ImgComp src={i31} />,
//     <ImgComp src={i32} />,
//     <ImgComp src={i33} />,
//     <ImgComp src={i34} />,
//     <ImgComp src={i35} />,
//     <ImgComp src={i36} />,
//     <ImgComp src={i37} />,
//   ];

//   const [x, setX] = useState(0);
//   const goLeft = () => {
//     x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
//   };
//   const goRight = () => {
//     x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
//   };
//   return (
//     <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
//       <h3 className="cont">Foto</h3>
//       <div className="slider">
//         {sliderArr.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="slide"
//               style={{
//                 transform: `translateX(${x}%)`,
//               }}
//             >
//               {item}
//             </div>
//           );
//         })}
//         <button id="goLeft" className="btn1" onClick={goLeft}>
//           <ArrowLeftIcon className="arrow" />
//         </button>
//         <button id="goRight" className="btn1" onClick={goRight}>
//           <ArrowRightIcon className="arrow" />
//         </button>
//       </div>
//     </motion.div>
//   );
// }

// export default Slider;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SliderData } from "./SliderData";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";
import "./Slider.css";

function Slider() {
  const location = useLocation();

  // Pobranie parametru 'title' z URL
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title")?.toLowerCase() || "default"; // Konwertujemy 'title' na małe litery
  console.log("Title from URL:", title); // Sprawdzamy, co dostajemy z URL

  const [sliderImages, setSliderImages] = useState([]); // Inicjalizujemy na pustą tablicę

  // Zmieniamy dane slidera, gdy zmienia się parametr title w URL
  useEffect(() => {
    console.log("Available SliderData:", SliderData); // Logujemy wszystkie dostępne dane
    console.log("SliderData for title:", title, SliderData[title]); // Logujemy dane dla danego tytułu

    // Jeśli istnieją dane dla danego tytułu, ustawiamy je w stanie
    if (SliderData[title]) {
      console.log("Setting slider images for title:", title);
      setSliderImages(SliderData[title].images); // Załaduj odpowiednie zdjęcia na podstawie title
    } else {
      console.log("No data found for this title, using default");
      setSliderImages(SliderData["default"].images); // Jeśli brak danych, użyj domyślnych zdjęć
    }
  }, [title]); // Używamy title jako zależności, żeby za każdym razem aktualizować stan

  // Sprawdzamy, co jest w sliderImages po aktualizacji stanu
  useEffect(() => {
    console.log("Updated sliderImages:", sliderImages);
  }, [sliderImages]);

  const [x, setX] = useState(0);

  const goLeft = () => {
    setX(x === 0 ? -100 * (sliderImages.length - 1) : x + 100);
  };

  const goRight = () => {
    setX(x === -100 * (sliderImages.length - 1) ? 0 : x - 100);
  };

  if (sliderImages.length === 0) {
    return <div>Brak dostępnych zdjęć dla tego tytułu.</div>; // Jeśli brak zdjęć
  }

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <div className="slider">
        {sliderImages.length > 0 ? (
          sliderImages.map((item, index) => (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${x}%)`,
              }}
            >
              <img src={item.image} alt={`Slide ${index + 1}`} />
              {item.desc && <p className="description">{item.desc}</p>}
              {/* Wyświetlanie opisu */}
            </div>
          ))
        ) : (
          <p>Brak dostępnych obrazów</p>
        )}
        <button id="goLeft" className="btn1" onClick={goLeft}>
          <ArrowLeftIcon className="arrow" />
        </button>
        <button id="goRight" className="btn1" onClick={goRight}>
          <ArrowRightIcon className="arrow" />
        </button>
      </div>
    </motion.div>
  );
}

export default Slider;
