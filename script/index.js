"use strict";
import SplitType from "split-type";
("");
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

// FAQ section
const faqContainer = document.querySelectorAll(".faq-container");

function removeActive() {
  faqContainer.forEach((element) => {
    element.classList.remove("faq-active");
    element.querySelector("p").style.maxHeight = "0px";
    element.querySelector(".icon").textContent = "+";
  });
}

faqContainer.forEach((question) => {
  question.addEventListener("click", function (e) {
    const clickedElement = e.target.closest(".faq-container");
    const isActive = clickedElement.classList.contains("faq-active");

    // First, collapse all sections
    removeActive();

    // If the clicked section was already active, don't reopen it
    if (!isActive) {
      clickedElement.classList.toggle("faq-active");
      clickedElement.querySelector("p").style.maxHeight =
        clickedElement.querySelector("p").scrollHeight + "px";
      clickedElement.querySelector(".icon").textContent = "-";
    }
  });
});
