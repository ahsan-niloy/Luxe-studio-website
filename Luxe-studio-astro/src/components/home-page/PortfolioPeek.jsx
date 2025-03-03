import PortfolioImages from "../../components/portfolio-page/PortfolioImages";
// Dynamically import all images from the folder
const images = import.meta.glob("../../assets/portfolio-images/*.jpg", {
  eager: true,
});

const imageArray = Object.entries(images).map(([path, module]) => ({
  src: module.default,
  alt: "Luxe Studios protfolio picture", // Use filename as alt text
}));

function PortfolioPeek() {
  return (
    
  );
}

export default PortfolioPeek;
