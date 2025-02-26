import Subheading from "../Subheading";
import AboutUsCover from "../aboutUs-page/AboutUsCover";
import ImageFrame from "../aboutUs-page/ImageFrame";
import Button from "../Button";

export default function AboutUs() {
  return (
    <div>
      <AboutUsCover />
      <Subheading>About Us</Subheading>
      <div className="flex items-baseline mx-[5vw] sm:mx-auto max-w-[600px] text-center">
        <div>
          <img
            src="/assets/start-quots.svg"
            alt="start quots logo"
            className="w-[200px]"
          />
        </div>
        <div>
          <p>
            At Luxe Studio, we believe every moment is a story waiting to be
            told. we capture the essence of your most cherished memories with
            elegance and artistry. Our passion lies in documenting love, joy,
            and the unique beauty of each celebration, ensuring that your
            special day is remembered in stunning detail.
          </p>
        </div>
        <div>
          <img
            src="/assets/end-quots.svg"
            alt="end quots logo"
            className="w-[200px]"
          />
        </div>
      </div>
      <div className="mt-[4rem] mt-[8rem] flex flex-col md:flex-row gap-8 items-center justify-center mx-[5vw] md:mx-[10vw]">
        <div>
          <ImageFrame ImageUrl={"assets/about-us-Ahsan.jpg"} />
        </div>
        <div>
          <h4 className="text-[#717342] font-semibold text-[2rem] md:text-[3rem] whitespace-nowrap">
            Ahsan Habib Niloy
          </h4>
          <span className="text-[1.2rem] md:text-[1.5rem]">
            Lead Photographer & Co-Founder
          </span>
          <p className="max-w-[500px]">
            With 4 years of experience in photography, my journey behind the
            camera has been incredibly rewarding. I’ve poured my creativity and
            dedication into every project, driven by my genuine love for
            storytelling. What began as a simple passion has blossomed into Luxe
            Studio, where I strive to combine my technical skills with a
            personal touch in every wedding I capture.
          </p>
        </div>
      </div>
      <div className="mt-[4rem] md:my-[8rem] flex flex-col md:flex-row gap-8 items-center justify-center md:flex-row-reverse mx-[5vw] md:mx-[10vw]">
        <div>
          <ImageFrame ImageUrl={"assets/about-us-tharu.jpg"} />
        </div>
        <div>
          <h4 className="text-[#717342] font-semibold text-[1.8rem] md:text-[3rem] whitespace-nowrap">
            Tharoushan Kandarajah
          </h4>
          <span className="text-[1.2rem] md:text-[1.5rem]">
            Lead Videographer & Co-Founder
          </span>
          <p className="max-w-[500px]">
            I have a true passion for capturing the magic of weddings through
            film. Getting to know couples and helping them feel at ease is
            important to me, as I want their genuine moments to shine through in
            every video. With 6 years of experience and a creative eye for
            storytelling, I strive to beautifully narrate your love story—from
            the heartfelt vows to the joyful dance floor. At Luxe Studio, I'm
            dedicated to creating stunning videos that you’ll want to watch over
            and over again.
          </p>
        </div>
      </div>
      <div className="mx-[5vw] sm:mx-auto max-w-[600px] text-center">
        <h2 className="text-4xl font-semibold mt-[5rem] mb-4">
          Reserve a sit for your day
        </h2>
        <Button className="mx-auto">Book a call</Button>
      </div>
    </div>
  );
}
