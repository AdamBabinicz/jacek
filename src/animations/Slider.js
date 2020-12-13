import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ImgComp from "./ImgComp";
import i1 from "../images/img-1.jpg";
import i2 from "../images/img-2.jpg";
import i3 from "../images/img-3.jpg";
// import i4 from "../images/gallery/36.jpg";
// import i5 from "../images/gallery/29.jpg";
// import i6 from "../images/gallery/18.jpg";
// import i7 from "../images/gallery/48.jpg";
// import i8 from "../images/gallery/19.jpg";
// import i9 from "../images/gallery/49.jpg";
// import i10 from "../images/gallery/27.jpg";
// import i11 from "../images/gallery/24.jpg";
// import i12 from "../images/gallery/16.jpg";
// import i13 from "../images/gallery/38.jpg";
// import i14 from "../images/gallery/32.jpg";
// import i15 from "../images/gallery/34.jpg";
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

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    // <ImgComp src={i4} />,
    // <ImgComp src={i5} />,
    // <ImgComp src={i6} />,
    // <ImgComp src={i7} />,
    // <ImgComp src={i8} />,
    // <ImgComp src={i9} />,
    // <ImgComp src={i10} />,
    // <ImgComp src={i11} />,
    // <ImgComp src={i12} />,
    // <ImgComp src={i13} />,
    // <ImgComp src={i14} />,
    // <ImgComp src={i15} />,
    // <ImgComp src={i16} />,
    // <ImgComp src={i17} />,
    // <ImgComp src={i18} />,
    // <ImgComp src={i19} />,
    // <ImgComp src={i20} />,
    // <ImgComp src={i21} />,
    // <ImgComp src={i22} />,
    // <ImgComp src={i23} />,
    // <ImgComp src={i24} />,
    // <ImgComp src={i25} />,
    // <ImgComp src={i26} />,
    // <ImgComp src={i27} />,
    // <ImgComp src={i28} />,
    // <ImgComp src={i29} />,
    // <ImgComp src={i30} />,
    // <ImgComp src={i31} />,
    // <ImgComp src={i32} />,
    // <ImgComp src={i33} />,
    // <ImgComp src={i34} />,
    // <ImgComp src={i35} />,
    // <ImgComp src={i36} />,
    // <ImgComp src={i37} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      <h3 className="cont">Foto</h3>
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${x}%)`,
              }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="btn1" onClick={goLeft}>
          <ArrowLeftIcon className="arrow" />
        </button>
        <button id="goRight" className="btn1" onClick={goRight}>
          <ArrowRightIcon className="arrow" />
        </button>
      </div>
    </>
  );
}

export default Slider;
