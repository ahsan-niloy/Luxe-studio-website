import Button from "../Button";

function Packages() {
  return (
    <div className="mx-[5vw] md:mr-[10vw] flex flex-col gap-[1.5rem] md:gap-[3rem]">
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
      {/* packages starts here ======================================== */}
      <div id="wedding-package">
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
              Wedding Photography & Videography Services
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
            <Button
              btnLink="https://calendly.com/habibniloy/luxe-studios"
              newTab={true}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <div id="event-package">
        <div className="flex  flex-col md:flex-row-reverse justify-center items-center gap-[2rem] md:gap-[8rem] mt-[4rem]">
          <div className="h-[400px] max-w-[350px]">
            <img
              src="/assets/packages-image/event.jpg"
              alt="wedding package picture"
              className="h-full w-full object-cover rounded-t-full shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[#717342] font-semibold text-[1.5rem]">
              Event Photography & Videography
            </h1>
            <p className="max-w-[400px]">
              Whether it's a corporate event, birthday, anniversary, or brand
              launch, we provide high-quality event photography and videos to
              make your event unforgettable.
            </p>
            <ul role="list" className="list-disc list-inside">
              <li>Professional Event Coverage (Corporate & Personal)</li>
              <li>Live Event Photography & Instant Edits</li>
              <li>Candid & Posed Shots</li>
              <li>High-Resolution Videos for Social Media & Marketing</li>
            </ul>
            <Button
              btnLink="https://calendly.com/habibniloy/luxe-studios"
              newTab={true}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <div id="portrait-package">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem] md:gap-[8rem] mt-[4rem]">
          <div className="h-[400px]">
            <img
              src="/assets/packages-image/niki7.jpg"
              alt="wedding package picture"
              className="h-full w-full object-cover rounded-t-full shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[#717342] font-semibold text-[1.5rem]">
              Professional Portrait Photography
            </h1>
            <p className="max-w-[400px]">
              Enhance your personal brand, portfolio, or social media presence
              with our high-end portrait photography services.
            </p>
            <ul role="list" className="list-disc list-inside">
              <li>Studio & Outdoor Portraits</li>
              <li>Professional Retouching & Editing</li>
              <li>Business Headshots, Modelling, & Fashion Shoots</li>
            </ul>
            <Button
              btnLink="https://calendly.com/habibniloy/luxe-studios"
              newTab={true}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <div id="couple-package">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-[2rem] md:gap-[8rem] mt-[4rem] mb-[2rem] md:mb-[4rem]">
          <div className="h-[400px]">
            <img
              src="/assets/packages-image/anmol19.jpg"
              alt="wedding package picture"
              className="h-full w-full object-cover rounded-t-full shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[#717342] font-semibold text-[1.5rem]">
              Couple & Engagement Photoshoots
            </h1>
            <p className="max-w-[400px]">
              Celebrate love with a romantic couple’s photoshoot. Perfect for
              engagements, anniversaries, and pre-wedding shoots, we capture
              your love story in breathtaking locations.
            </p>
            <ul role="list" className="list-disc list-inside">
              <li>Dreamy Outdoor & Studio Sessions</li>
              <li>Candid & Styled Photography</li>
              <li>Themed Shoots for Unique Concepts</li>
            </ul>
            <Button
              btnLink="https://calendly.com/habibniloy/luxe-studios"
              newTab={true}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
