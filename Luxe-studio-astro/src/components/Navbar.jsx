import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import Button from "./Button";

export default function Navbar({ textColor = "#FFFFFF" }) {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const navTextDropdownColor = "#000";
  const lottieRef = useRef(null);

  // Load the Lottie animation dynamically from public folder
  useEffect(() => {
    fetch("/assets/menu.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  function toggleNavMenu() {
    setShowNavMenu((prev) => !prev);

    if (lottieRef.current) {
      showNavMenu
        ? lottieRef.current.goToAndPlay(99, true) // Play closing animation
        : lottieRef.current.goToAndPlay(0, true); // Play opening animation (adjust frames as needed)
    }
  }

  return (
    <>
      <nav className="flex flex-row justify-between items-center absolute w-full z-20 left-0 px-[5vw] md:px-[10vw] py-4">
        <div>
          <img
            src="/assets/final-logo.svg"
            alt="Luxe Studios Logo"
            className="w-[60px] md:w-full"
          />
        </div>
        <div className="block md:hidden absolute right-0 z-40">
          <button onClick={toggleNavMenu} className="w-[100px] h-[60px]">
            {animationData && (
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
              />
            )}
          </button>
        </div>

        <div>
          <ul
            className={
              showNavMenu
                ? "absolute z-30 top-0 left-0 text-[#717342] bg-[#f0eee8] flex flex-col justify-center items-center w-full h-screen text-[2rem] gap-6"
                : " hidden md:flex md:flex-row md:gap-4 items-center"
            }
            style={{
              color: showNavMenu ? navTextDropdownColor : textColor,
            }}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Package</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <Button>Contact Us</Button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="background-blur absolute w-full h-[200px] z-10 left-0"></div>
    </>
  );
}
