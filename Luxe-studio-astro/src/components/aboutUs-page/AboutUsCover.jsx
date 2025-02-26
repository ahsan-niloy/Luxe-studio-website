export default function AboutUsCover() {
  return (
    <div className="w-screen h-[400px] sm:h-[600px] relative">
      <img
        src="/assets/aboutus-cover.jpeg"
        alt="Drone view of a serene lake surrounded by trees"
        className="object-cover w-full h-full"
      />
      <img
        src="/assets/aboutUsHeader.svg"
        alt="about us header image text"
        className="absolute py-[20px] h-[300px] sm:h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
