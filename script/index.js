"use strict";
import SplitType from "split-type";
import gsap from "gsap";
// nav icon & animation

const icon = document.getElementById("nav-icon4");
const navActive = document.querySelector(".nav-active");
const navMenu = document.querySelector(".nav-menu");

if (icon) {
  icon.addEventListener("click", function () {
    this.classList.toggle("open");
    navMenu.classList.toggle("nav-active");
  });
}

// Animation
// nav-Text Animation
const texts = document.querySelectorAll(".text");

texts.forEach((text) => {
  // Apply SplitType to each text element
  new SplitType(text, {
    types: "words, chars",
  });

  text.addEventListener("mouseenter", () => {
    gsap.to(text.querySelectorAll(".char"), {
      yPercent: -100,
      ease: "power3.inOut",
      stagger: { each: 0.01 },
      overwrite: true,
    });
  });

  text.addEventListener("mouseleave", () => {
    gsap.to(text.querySelectorAll(".char"), {
      yPercent: 0,
      ease: "power3.inOut",
      stagger: { each: 0.01, from: "end" },
    });
  });
});
