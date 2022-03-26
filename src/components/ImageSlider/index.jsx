import React, { useState } from "react";
import classes from "./slider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${classes.slide} ${classes.active}`
                : `${classes.slide}`
            }
            key={index}
          >
            {index === current && (
              <img src={slide} alt="image" className={classes.image} />
            )}
          </div>
        );
      })}
      <div className={classes.dots}>
        {slides.map((_, index) => (
          <a
            onClick={() => setCurrent(index)}
            className={index === current ? `${classes.active}` : ""}
          ></a>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
