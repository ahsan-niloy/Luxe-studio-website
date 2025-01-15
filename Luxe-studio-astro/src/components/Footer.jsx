export default function Footer() {
  return (
    <footer className="bg-[#CAC9B6] text-[#717342] flex flex-col gap-10 pt-[100px] px-[5vw] md:px-[10vw]">
      <div>
        <ul className="flex justify-center gap-10 flex-wrap">
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
            <a href="#">Contact Us</a>
          </li>

          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center gap-10 flex-wrap">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex justify-center flex-wrap md:justify-between gap-2">
        <div>©2024 All right reserved</div>
        <div className="flex gap-6">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
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
