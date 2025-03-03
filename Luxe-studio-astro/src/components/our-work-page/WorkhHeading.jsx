import PortfolioImages from "../portfolio-page/portfolioImages";
import Subheading from "../Subheading";
function WorkHeading({ children, name, location, description }) {
  return (
    <div>
      <div>
        <div className="pt-[5rem]">
          <span className="text-[#f0eee8]">.</span>
          <Subheading>{name}</Subheading>
        </div>

        <div className="mx-[5vw] md:mx-[10vw]">
          <h3 className="text-[1.5rem]">{location}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <PortfolioImages>{children}</PortfolioImages>
      </div>
    </div>
  );
}

export default WorkHeading;
