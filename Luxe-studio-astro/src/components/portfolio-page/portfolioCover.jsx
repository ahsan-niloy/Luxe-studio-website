import PhotoHeader from "../PhotoHeader";
import PortfolioImages from "./PortfolioImages";
export default function PortfolioCover({ children }) {
  return (
    <div>
      <PhotoHeader image={"/assets/portfolio-cover.jpg"}>
        <h1 className="text-[2rem] leading-10 md:text-[3rem] text-white absolute bottom-0 px-[5vw] md:px-[10vw]">
          we keep the love in a <span className="font-bold">photograph</span>
          <span className="text-[1.5rem]"> (ed sheeran)</span>
        </h1>
      </PhotoHeader>
      <div>
        <PortfolioImages>{children}</PortfolioImages>
      </div>
      <p className="text-center text-[2rem] text-[#717342]">
        More on the way...
      </p>
    </div>
  );
}
