export default function PortfolioCover({ children }) {
  return (
    <div>
      <div className="relative">
        <h1 className="text-[2rem] leading-10 md:text-[3rem] text-white absolute bottom-0 px-[5vw] md:px-[10vw]">
          we keep the love in a <span className="font-bold">photograph</span>
          <span className="text-[1.5rem]"> (ed sheeran)</span>
        </h1>
        <img
          src="/assets/portfolio-cover.jpg"
          alt="portfolio cover"
          className="object-cover max-h-[400px] w-screen"
        />
      </div>
      <div className="relative">
        <div className="portfolio-images my-[2rem] px-[5vw] md:px-[10vw]">
          {children}
        </div>
        <div className="gradient h-[300px] w-screen absolute z-10 bottom-0"></div>
      </div>
      <p className="text-center text-[2rem] text-[#717342]">
        More on the way...
      </p>
    </div>
  );
}
