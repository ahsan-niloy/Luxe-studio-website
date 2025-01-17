import Subheading from "../Subheading";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: `"Luxe Studio was fantastic! They understood exactly what we wanted and delivered beautifully. The video was a highlight—it captured all the emotions of the day and even made us cry (in the best way!). We couldn’t be happier."`,
    name: "Sophia & Michael",
  },
  {
    text: `"They exceeded our expectations! They were professional yet easygoing, capturing moments we didn’t even notice. The photos feel natural and beautifully tell the story of our day. We’re so grateful!"`,
    name: "Emily & Daniel",
  },
  {
    text: `"Luxe Studio made everything stress-free and fun! They were organized, captured stunning photos, and created a video we keep watching with family. Highly recommend!"`,
    name: "Ava & Liam",
  },
];

export default function NiceWords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoSliding) {
      interval = setInterval(() => {
        triggerSlideChange();
      }, 5000); // Change every 5 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoSliding, currentIndex]);

  const triggerSlideChange = () => {
    setFade(false); // Start fade-out transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Update to next slide
      setFade(true); // Start fade-in transition
    }, 500); // Duration of fade-out transition
  };

  const handleNextSlide = () => {
    setIsAutoSliding(false); // Stop auto-sliding
    triggerSlideChange();
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div>
      <Subheading>Nice words about us</Subheading>
      <div className="px-[5vw] md:px-[10vw] my-[2rem] md:my-[4rem] ">
        <div className="bg-[#717342] bg-opacity-[0.3] overflow-hidden rounded-[2rem] flex flex-col lg:flex-row max-w-max mx-auto">
          <div className="p-[1rem] md:p-[3rem]">
            <div className="bg-[#F0EEE8] h-full p-[1rem] md:p-[2rem] rounded-[1.5rem] grid place-content-center">
              <div
                className={` h-[200px] md:h-[180px] transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="max-w-[300px]">{currentTestimonial.text}</p>
                <span className="customer-name font-semibold text-lg text-[#717342] block mt-1">
                  {currentTestimonial.name}
                </span>
              </div>
              <button onClick={handleNextSlide} className="mt-2 p-[0px]">
                <img
                  src="/assets/right-arrows.svg"
                  className="h-[40px] ml-auto md:ml-[0px] md:mr-auto"
                  alt="Next Slide"
                />
              </button>
            </div>
          </div>
          <div className="min-h-auto md:min-h-[300px] md:min-w-[350px]">
            <img
              src="/assets/testomonials.jpg"
              alt="Indian bride picture"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
