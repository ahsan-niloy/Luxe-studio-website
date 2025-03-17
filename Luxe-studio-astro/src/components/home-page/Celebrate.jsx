import Button from "../Button";
import Subheading from "../Subheading";

export default function Celebrate() {
  return (
    <div className="flex flex-col lg:flex-row my-[3rem] lg:my-[6rem] items-center justify-between gap-[5rem] lg:gap-4">
      <div className="">
        <div className=" md:mt-[-2rem] lg:min-w-[110%]">
          <Subheading>Celebrate</Subheading>
          <h2 className="text-[2rem] md:text-[3rem] font-semibold text-[#717342] px-[5vw] md:px-[10vw] leading-none mt-[-1.5rem] md:mt-[-3rem] whitespace-nowrap">
            Every Moments
          </h2>
        </div>
        <p className="px-[5vw] md:px-[10vw] mt-4 max-w-[800px]">
          Let us make your special day extraordinary with our personalized
          wedding services. Experience the joy and elegance you’ve always
          dreamed of
        </p>
        <div className="px-[5vw] md:px-[10vw] mt-6">
          <Button
            btnLink="https://calendly.com/habibniloy/luxe-studios"
            newTab={true}
          >
            Book a Call
          </Button>
        </div>
      </div>
      <div className="sm:mr-[5vw] md:mr-[10vw] m-4 relative">
        <div className="absolute flex flex-col gap-2 rounded-[1rem] top-[-15vw] sm:top-[-10%] left-[18vw] sm:left-[27%] md:left-[5vw] lg:left-[8vw] p-4 text-[#717342] bg-[#CAC9B7]">
          <span className="text-[2rem] font-semibold">60+</span>
          <span>Events all over the world</span>
          <hr />
          <span className="text-[2rem] font-semibold">18+</span>
          <span>Companies corporate with us</span>
        </div>
        <img
          src="/assets/celebrate-section.jpg"
          alt="couple celebrateing their love journey"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
