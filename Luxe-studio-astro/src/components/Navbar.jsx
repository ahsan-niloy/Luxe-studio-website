import Button from "./Button";

export default function Navbar({ textColor = "#FFFFFF" }) {
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
        <div>
          <ul
            className="hidden md:flex flex-row gap-4 items-center"
            style={{ color: textColor }}
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
      <div className="backgorund-blur absolute w-full h-[200px] z-10 left-0"></div>
    </>
  );
}
