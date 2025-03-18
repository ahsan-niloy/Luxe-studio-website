import { button } from "motion/react-client";
import Subheading from "../Subheading";
import Button from "../Button";

// Swiper imports
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import for autoplay

// Import required modules
import { Autoplay } from "swiper/modules";

export default function OurEvent() {
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    {
      date: "21 May",
      location: "Tranquille, Kamloops",
      description:
        "Celebrate a joyous reception with family, friends, love, and laughter.",
      buttonLink: "/our-work/niki",
      backgroundImage: "/assets/our-work-card-1.jpg",
    },
    {
      date: "21 July",
      location: "Sahali, Kamloops",
      description:
        "If you are looking for best mountain view Kamloops is the perfect place for you",
      buttonLink: "/our-work/khaled",
      backgroundImage: "/assets/our-work-card-2.jpg",
    },
    {
      date: "28 July",
      location: "Hill side, Kamloops",
      description: "Hillside Residential Area with Scenic Views in Kamloops.",
      buttonLink: "/our-work/anmol",
      backgroundImage: "/assets/our-work-card-3.jpg",
    },
  ];

  useEffect(() => {
    // Check screen size on mount and on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <Subheading>Our Works</Subheading>
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true} // Enable centered slides
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="event-cards mySwiper px-[5vw] md:px-[10vw] text-white flex justify-center"
        >
          {data.map((card, key) => (
            <SwiperSlide key={key} className="">
              <div
                className="event-card mx-auto  h-[400px] w-[300px] overflow-hidden rounded-xl p-4 relative"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="event-content h-full flex flex-col justify-between relative z-40">
                  <span className="event-date">{card.date}</span>
                  <div>
                    <p className="event-location font-semibold text-[1.5rem] leading-5 ">
                      {card.location}
                    </p>
                    <p className="event-description">{card.description}</p>
                    <Button
                      className="event-button mt-2"
                      type="secondary"
                      icon="/assets/right-arrow.svg"
                      btnLink={card.buttonLink}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="absolute h-full w-full top-0 left-0 opacity-[0.1] z-10 bg-black"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="event-cards flex flex-wrap justify-center gap-8 px-[10vw] text-white">
          {data.map((card, key) => (
            <div
              key={key}
              className="event-card h-[450px] w-[350px] overflow-hidden rounded-xl p-4 relative"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="event-content h-full flex flex-col justify-between relative z-40">
                <span className="event-date">{card.date}</span>
                <div>
                  <p className="event-location font-semibold text-[1.5rem] leading-5 ">
                    {card.location}
                  </p>
                  <p className="event-description">{card.description}</p>
                  <Button
                    className="event-button mt-2"
                    type="secondary"
                    icon="/assets/right-arrow.svg"
                    btnLink={card.buttonLink}
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="absolute h-full w-full top-0 left-0 opacity-[0.1] z-10 bg-black"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
