import React from "react";

function ImgComp({ src }) {
  let imgStyles = {
    maxWidth: "100" + "%",
    maxHeight: "100" + "vh",
  };
  return <img src={src} alt="..." style={imgStyles} />;
}

export default ImgComp;
