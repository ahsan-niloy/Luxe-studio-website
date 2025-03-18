import { div } from "motion/react-client";

function PortfolioImages({ children }) {
  return (
    <div className="relative my-[3rem] md:my-[8rem]">
      <div className="portfolio-images my-[2rem] px-[5vw] md:px-[10vw]">
        {children}
      </div>
      <div className="gradient h-[300px] w-screen absolute z-30 bottom-[-8px]"></div>
    </div>
  );
}

export default PortfolioImages;
