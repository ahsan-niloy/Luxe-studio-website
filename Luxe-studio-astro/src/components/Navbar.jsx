import { useState, useEffect } from "react";
import Button from "./Button";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar({ textColor = "#FFFFFF" }) {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const navTextDropdownColor = "#000";

  function toggleNavMenu() {
    setShowNavMenu((prev) => !prev);
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (showNavMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showNavMenu]);

  return (
    <>
      <nav
        className="flex flex-row justify-between items-center absolute w-full z-20 left-0 px-[5vw] md:px-[10vw] py-4"
        role="navigation"
      >
        <div>
          <a href="/">
            <img
              src="/assets/final-logo.svg"
              alt="Luxe Studios Logo"
              className="w-[60px] md:w-full"
            />
          </a>
        </div>

        {/* Hamburger Menu (Visible on Mobile Only) */}
        <div className="block md:hidden absolute right-[5vw] z-40">
          <Hamburger
            toggled={showNavMenu}
            toggle={toggleNavMenu}
            aria-label="Toggle navigation menu"
            color={!showNavMenu ? "#fff" : "#717342"}
            rounded
            hideOutline={false}
          />
        </div>

        {/* Desktop Navigation (Always Visible) */}
        <ul
          className="hidden md:flex md:flex-row md:gap-4 items-center"
          style={{ color: textColor }}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/packages">Package</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <Button btnLink="/contact-us">Contact Us</Button>
          </li>
        </ul>

        {/* Mobile Navigation Menu (Sliding Down from Top Without Opacity) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#f0eee8] flex flex-col justify-center items-center text-[#717342] text-[2rem] gap-6 transition-transform duration-500 ease-in-out ${
            showNavMenu
              ? "translate-y-0 pointer-events-auto"
              : "-translate-y-full pointer-events-none"
          } md:hidden`}
        >
          <ul className="text-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/packages">Package</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li className="mt-4">
              <Button btnLink="/contact-us">Contact Us</Button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background Blur */}
      <div className="background-blur absolute w-full h-[200px] z-10 left-0"></div>
    </>
  );
}
