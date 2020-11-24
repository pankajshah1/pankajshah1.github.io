<<<<<<< HEAD
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Text Intro
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: 0.1,
    ease: "back",
  });
}; 
export const hoverIntro1 = elem => {
  gsap.to(elem.target, {
   y:50,
    ease: "back",
  });
}; 
export const hoverIntro2 = elem => {
  gsap.from(elem.target, {
   y:-50,
    ease: "back",
  });
}; 


//Open menu
export const menuShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2,
    },
  });
};
//Close menu
export const menuHide = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};
=======
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Text Intro
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: 0.1,
    ease: "back",
  });
}; 
export const hoverIntro1 = elem => {
  gsap.to(elem.target, {
   y:50,
    ease: "back",
  });
}; 
export const hoverIntro2 = elem => {
  gsap.from(elem.target, {
   y:-50,
    ease: "back",
  });
}; 


//Open menu
export const menuShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2,
    },
  });
};
//Close menu
export const menuHide = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};
>>>>>>> first commit
