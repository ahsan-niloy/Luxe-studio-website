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

// Import your images
import image1 from "../Asset/1.jpg";
import image2 from "../Asset/2.jpg";
import image3 from "../Asset/3.jpg";
import image4 from "../Asset/4.jpg";
import image5 from "../Asset/5.jpg";
import image6 from "../Asset/6.jpg";

// Store them in an array
const images = [image1, image2, image3, image4, image5, image6];

// HEADER SLIDER SECTION
const sliderContent = [
  "friendship",
  "Love",
  "Forever",
  "Celebration",
  "Moments",
  "memories",
];
let currentImageIndex = 2;
let currentContentIndex = 1;
const totalImages = 6;
let isAnimating = false;

function splitTextIntoSpans(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    let text = element.innerText;
    let splitText = text
      .split("")
      .map(function (char) {
        return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
      })
      .join("");
    element.innerHTML = splitText;
  });
}

gsap.to(".slide-next-img", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1.5,
  ease: "power3.out",
  delay: 1,
});

function updateSlider() {
  if (isAnimating) return;
  isAnimating = true;

  splitTextIntoSpans(".slider-content-active h3");

  gsap.to(".slide-active img", {
    scale: 2,
    duration: 2,
    ease: "power3.out",
  });

  gsap.to(".slider-content-active h3 span", {
    top: "-175px",
    stagger: 0.05,
    ease: "power3.out",
    duration: 0.5,
    onComplete: () => {
      gsap.to(".slider-content-active", {
        top: "-175px",
        duration: 0.25,
        ease: "power3.out",
      });
    },
  });

  splitTextIntoSpans(".slider-content-next h3");
  gsap.set(".slider-content-next h3 span", { top: "200px" });

  gsap.to(".slider-content-next", {
    top: "0",
    duration: 1.125,
    ease: "power3.out",
    onComplete: function () {
      document.querySelector(".slider-content-active").remove();
      gsap.to(".slider-content-next h3 span", {
        top: 0,
        stagger: 0.05,
        ease: "power3.out",
        duration: 0.5,
      });

      const nextContent = document.querySelector(".slider-content-next");
      nextContent.classList.remove("slider-content-next");
      nextContent.classList.add("slider-content-active");
      nextContent.style.top = "0";

      currentContentIndex = (currentContentIndex + 1) % totalImages;
      const nextContentText = sliderContent[currentContentIndex];
      const newContentHTML = `<div class="slider-content-next" style="top: 200px;"><h3>${nextContentText}</h3></div>`;
      document
        .querySelector(".slider-content")
        .insertAdjacentHTML("beforeend", newContentHTML);
    },
  });

  currentImageIndex = (currentImageIndex + 1) % totalImages;

  const newSlideHTML = `
     <div class="slide-next">
       <div class="slide-next-img">
         <img src="${images[currentImageIndex]}" alt="" />
       </div>
     </div>
   `;
  document
    .querySelector(".slider")
    .insertAdjacentHTML("beforeend", newSlideHTML);

  gsap.to(".slider .slide-next:last-child .slide-next-img", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5,
  });

  const slideNextImg = document.querySelector(".slide-next-img");
  gsap.to(slideNextImg, {
    width: "100vw",
    height: "100vh",
    duration: 2,
    ease: "power3.out",
    onComplete: function () {
      const currentActiveSlide = document.querySelector(".slide-active");
      if (currentActiveSlide) {
        currentActiveSlide.parentNode.removeChild(currentActiveSlide);
      }

      const nextSlide = document.querySelector(".slide-next");
      if (nextSlide) {
        nextSlide.classList.remove("slide-next");
        nextSlide.classList.add("slide-active");

        const nextSlideImg = nextSlide.querySelector(".slide-next-img");
        if (nextSlide) {
          nextSlideImg.classList.remove("slide-next-img");
        }
      }

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    },
  });
}

// Automatically update the slider every 1.5 seconds
setInterval(updateSlider, 4000);

// GALLERY SECTION
const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

class DragScroll {
  constructor(obj) {
    this.el = document.querySelector(obj.el);
    this.wrap = this.el.querySelector(obj.wrap);
    this.items = this.el.querySelectorAll(obj.item);
    this.bar = this.el.querySelector(obj.bar);
    this.init();
  }

  init() {
    this.progress = 0;
    this.speed = 0;
    this.oldX = 0;
    this.x = 0;
    this.playrate = 0;

    this.bindings();
    this.events();
    this.calculate();
    this.raf();
  }

  bindings() {
    [
      "events",
      "calculate",
      "raf",
      "handleWheel",
      "move",
      "raf",
      "handleTouchStart",
      "handleTouchMove",
      "handleTouchEnd",
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  calculate() {
    this.progress = 0;
    this.wrapWidth = this.items[0].clientWidth * this.items.length;
    this.wrap.style.width = `${this.wrapWidth}px`;
    this.maxScroll = this.wrapWidth - this.el.clientWidth;
  }

  handleWheel(e) {
    this.progress += e.deltaY;
    this.move();
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.dragging = true;
    this.startX = e.clientX || e.touches[0].clientX;
    this.el.classList.add("dragging");
  }

  handleTouchMove(e) {
    if (!this.dragging) return false;
    const x = e.clientX || e.touches[0].clientX;
    this.progress += (this.startX - x) * 2.5;
    this.startX = x;
    this.move();
  }

  handleTouchEnd() {
    this.dragging = false;
    this.el.classList.remove("dragging");
  }

  move() {
    this.progress = clamp(this.progress, 0, this.maxScroll);
  }

  events() {
    window.addEventListener("resize", this.calculate);
    window.addEventListener("wheel", this.handleWheel);

    this.el.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);

    window.addEventListener("mousedown", this.handleTouchStart);
    window.addEventListener("mousemove", this.handleTouchMove);
    window.addEventListener("mouseup", this.handleTouchEnd);
    document.body.addEventListener("mouseleave", this.handleTouchEnd);
  }

  raf() {
    this.x = lerp(this.x, this.progress, 0.1);
    this.playrate = this.x / this.maxScroll;

    this.wrap.style.transform = `translateX(${-this.x}px)`;
    this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;

    this.speed = Math.min(100, this.oldX - this.x);
    this.oldX = this.x;

    this.scale = lerp(this.scale, this.speed, 0.1);
    this.items.forEach((item) => {
      item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
      item.querySelector("img").style.transform = `scaleX(${
        1 + Math.abs(this.speed) * 0.004
      })`;
    });
  }
}

const scroll = new DragScroll({
  el: ".carousel",
  wrap: ".carousel-wrapper",
  item: ".carousel-item",
  bar: ".carousel-progress-bar",
});

const animateScroll = () => {
  requestAnimationFrame(animateScroll);
  scroll.raf();
};
animateScroll();
