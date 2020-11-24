import React, { useState, useEffect, useRef } from "react";
import classes from "./styles.module.css";
import Intro from "./components/Intro/intro";
import Projects from "./components/Project/project";
import Contact from "./components/Contact/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  textIntro,
  hoverIntro1,
  hoverIntro2
} from "./components/animations/animate";
import Skills from "./components/Skills/skills";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Footer from "./components/Footer/footer";

export default function App() {
  let text = useRef(null);
  useEffect(() => {});

  function openNav(e) {
    e.preventDefault();
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menu").style.fontSize = "0px";
  }

  function closeNav(e) {
    e.preventDefault();

    document.getElementById("myNav").style.height = "0%";
    document.getElementById("menu").style.fontSize = "30px";
  }

  return (
    <div className={classes.App}>
      <div id="myNav" className={classes.overlay}>
        <a
          className={classes.alink}
          style={{ cursor: "pointer" }}
          className={classes.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
        <div className={classes.overlayContent}>
          <Link
            onClick={closeNav}
            activeClass="active"
            to={classes.skills}
            spy={true}
            smooth={true}
            offset={-40}
            duration={800}
          >
            Skills
          </Link>
          <br />
          <Link
            onClick={closeNav}
            activeClass="active"
            to={classes.procon}
            spy={true}
            smooth={true}
            offset={-40}
            duration={800}
          >
            Projects
          </Link>
          <br />

          <Link
            onClick={closeNav}
            activeClass="active"
            to={classes.contactScroll}
            spy={true}
            smooth={true}
            offset={-40}
            duration={800}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className={classes.header}>
        <span className={classes.resume1}>
          <a href="/uploads/resume.pdf" target="blank" style={{textDecoration:"none", color:"black"}}>
            VIEW RESUME
          </a>
        </span>
        <span id="menu" className={classes.menu} onClick={openNav}>
          &#9776;
        </span>
      </div>
      <Intro />
      <div className={classes.skills}>Skills</div>
      <Skills />
      <div className={[classes.skills, classes.procon].join(" ")}>Projects</div>
      <Projects />
      <div
        className={[classes.skills, classes.contactScroll, classes.procon].join(
          " "
        )}
      >
        Contact
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
