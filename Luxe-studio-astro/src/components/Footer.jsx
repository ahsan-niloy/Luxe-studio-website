export default function Footer() {
  return (
    <footer className="bg-[#CAC9B6] text-[#717342] flex flex-col gap-10 pt-[100px] px-[5vw] md:px-[10vw]">
      <div>
        <ul className="flex justify-center gap-10 flex-wrap">
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
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center gap-10 flex-wrap">
          <li>
            <a href="https://www.instagram.com/luxestudiosca/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/people/Luxe-Studios/61562632094466/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex justify-center flex-wrap md:justify-between gap-2">
        <div>©2024 All right reserved</div>
        <div className="flex gap-6">
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <div>
        <img
          src="/assets/Luxe-Studio-text.svg"
          alt="footer logo of Luxe Studios"
          className="w-full"
        />
      </div>
    </footer>
  );
}
