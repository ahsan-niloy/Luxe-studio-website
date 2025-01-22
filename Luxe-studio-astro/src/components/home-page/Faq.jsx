import React, { useState, useRef } from "react";
import Subheading from "../Subheading";

const faqData = [
  {
    id: 1,
    question: "How far in advance should we book your services?",
    answer:
      "We recommend booking as soon as possible, especially for popular wedding seasons. Ideally, 9-12 months in advance ensures availability for your special day.",
  },
  {
    id: 2,
    question: "Can we meet before booking to discuss our vision?",
    answer:
      "Absolutely! We encourage consultations where we can discuss your wedding details, style preferences, and any specific shots you’d like us to capture.",
  },
  {
    id: 3,
    question: "Do you provide raw footage or unedited photos?",
    answer:
      "We focus on delivering fully edited, high-quality photos and videos. However, if you would like raw footage or unedited images, we can discuss it during the consultation.",
  },
  {
    id: 4,
    question: "Do you offer both photography and videography packages?",
    answer:
      "Yes, Luxe Studio offers comprehensive packages that include both photography and videography. We also provide customizable options if you prefer one service over the other.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef({}); // Store refs for each FAQ answer

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const getHeight = (index) => {
    if (contentRefs.current[index]) {
      return activeIndex === index
        ? `${contentRefs.current[index].scrollHeight}px`
        : "0px";
    }
    return "0px";
  };

  return (
    <div className="">
      <Subheading>FAQ</Subheading>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6 mt-6 bg-[#F3F5F6] rounded-[1rem] p-2">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`p-4 rounded-lg transition-colors duration-300 ${
                activeIndex === index ? "bg-[#717342]" : ""
              } ${index !== faqData.length - 1 ? "border-b" : ""}`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </div>
                <div
                  className={`text-2xl px-[.6rem] rounded-[2rem] transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-white text-[#717342]"
                      : "bg-[#717342] text-white"
                  }`}
                >
                  {activeIndex === index ? "-" : "+"}
                </div>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: getHeight(index),
                  transition: "max-height 0.3s ease",
                  overflow: "hidden",
                }}
                className={`mt-3 transition-colors duration-300 ${
                  activeIndex === index ? "text-white" : "text-gray-600"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
