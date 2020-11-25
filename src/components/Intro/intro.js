import React, { useState, useEffect, useRef } from "react";
import classes from "./intro.module.css";
import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { textIntro } from "../animations/animate";
import Mouse from '../mouse/mouse';

const Intro = () => {
  let text = useRef(null);
  const [settings1, setSettings1] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  });
  const [settings2, setSettings2] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    arrows: false
  });
  const [settings3, setSettings3] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false
  });

  useEffect(() => {
   // textIntro(text);
  });
  return (
    <div className={classes.container}>
      <div className={classes.viewPage}>
        <div className={classes.imageToHide}>
          <img
            className={classes.circleImage}
            src="/images/developer.svg"
            alt="pankaj"
          />
        </div>
        <div className={classes.texts}>
          <p className={classes.hii}> Hi!!!</p>
          <p className={classes.name}>I am Pankaj Shah</p>
          <p className={classes.list}>I do |</p>
          <div className={classes.typeWrite}>
            <Typewriter
              options={{
                strings: ["React", "Javascript", "Blockchain"],
                autoStart: true,
                loop: true
              }}
            />
          </div>
          <div className={classes.line}></div>
          <div className={classes.flexContainer}>
            <Slider {...settings1}>
              <div className={classes.slick}>React</div>
              <div className={classes.slick}>Javascript</div>
              <div className={classes.slick}>Redux</div>
              <div className={classes.slick}>HTML</div>
              <div className={classes.slick}>CSS</div>
            </Slider>
            <Slider {...settings2}>
              <div className={classes.slick}>NodeJs</div>
              <div className={classes.slick}>Express</div>
              <div className={classes.slick}>mongodb</div>
              <div className={classes.slick}>Blockchain</div>
            </Slider>
            <Slider {...settings3}>
              <div className={classes.slick}>C</div>
              <div className={classes.slick}>C++</div>
              <div className={classes.slick}>chartJs</div>
              <div className={classes.slick}>d3.js</div>
            </Slider>
          </div>
        </div>
        <div className={classes.image}>
          <img
            className={classes.circleImage}
            src="/images/developer.svg"
            alt="pankaj"
          />
        </div>

       
      </div>
      <Mouse />
    </div>
  );
};

export default Intro;
