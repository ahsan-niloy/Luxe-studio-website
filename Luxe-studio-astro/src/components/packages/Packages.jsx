import Button from "../Button";

function Packages() {
  return (
    <div className="mx-[5vw] md:mr-[10vw]">
      <div className="flex md:gap-2 justify-center mt-[4rem]">
        <div>
          <img src="assets/start-quots.svg" alt="" />
        </div>
        <div>
          <h2 className="text-[1.5rem] font-semibold text-[#717342] text-center my-[1rem]">
            Capturing Your Moments, Creating Everlasting Memories
          </h2>
        </div>
        <div>
          {" "}
          <img src="assets/end-quots.svg" alt="" />
        </div>
      </div>
      <p className="text-center max-w-[700px] mx-auto">
        At Luxe Studios, we specialize in wedding photography, cinematic
        videography, event coverage, and professional portraits. Whether it's
        your wedding day, an engagement, a corporate event, or a personal
        photoshoot, we ensure every frame tells a beautiful story. We use
        high-end cameras, creative lighting, and professional editing techniques
        to deliver stunning visuals that last a lifetime.
      </p>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem] md:gap-[8rem] mt-[4rem]">
          <div className="h-[400px]">
            <img
              src="/assets/packages-image/khaled2.jpg"
              alt="wedding package picture"
              className="h-full w-full object-cover rounded-t-full shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[#717342] font-semibold text-[1.5rem]">
              Our Photography & Videography Services
            </h1>
            <p className="max-w-[400px]">
              Your wedding is one of the most cherished moments of your life. At
              Luxe Studios, we create timeless wedding photos and cinematic
              videos that capture every emotion and detail of your special day.
            </p>
            <ul role="list" className="list-disc list-inside">
              <li>Full-Day Wedding Photo - Video Coverage</li>
              <li>Cinematic Wedding Films & Highlights</li>
              <li>Pre-Wedding & Engagement Photoshoots</li>
              <li>Luxury Wedding Albums</li>
              <li>Drone Videography for Aerial Shots</li>
            </ul>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
