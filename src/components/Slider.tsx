import { useState } from "react";

type PropsCarrusel = {
  Images: {
    image1: string;
    image2: string;
  };
  ruta: string;
};
export const Slider = (Images: PropsCarrusel) => {
  const [style, setStyle] = useState("");

  const handleClickLeft = () => {
    setStyle("left");
  };
  const handleClickRight = () => {
    setStyle("right");
  };
  return (
    <div className="carrusel">
      <div className={`carrusel__grande ${style} `}>
        <img
          className="carrusel__img"
          src={Images.Images.image1}
          alt="imagen1"
        />
        <img
          className="carrusel__img"
          src={Images.Images.image2}
          alt="imagen1"
        />
      </div>
      <div className="puntos">
        <button className="Bleft" onClick={handleClickLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg>
        </button>
        <button className="Bright" onClick={handleClickRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
