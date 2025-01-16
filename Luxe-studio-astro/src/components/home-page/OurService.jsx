import Button from "../Button";
import Subheading from "../Subheading";
export default function OurService() {
  return (
    <div>
      <Subheading>Our Service</Subheading>
      <div className="px-[5vw] md:px-[10vw]">
        <ul>
          <li className="flex gap-4 items-center justify-between p-4 service-item ">
            <div className="flex items-start gap-4">
              <div className="service-number md:text-[2rem] font-semibold text-[#717342]">
                01
              </div>
              <div>
                <h3 className="text-[1.25rem] md:text-[4rem] font-bold leading-none uppercase">
                  Packages
                </h3>
                <p className="service-text-btn max-w-[500px] mt-2 hidden ">
                  Select Your Exceptional Wedding Photography & Videography
                  Services to Capture Every Cherished Moment
                </p>
                <div className="hidden service-text-btn">
                  <Button
                    type="secondary"
                    className="max-w-max mt-4 hidden md:block"
                    icon="/assets/open-arrow.svg"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1rem] hidden md:block min-h-[250px] overflow-hidden">
              <img
                src="/assets/service-packages.jpg"
                alt="service pictures"
                className="service-image object-cover w-[200px] min-w-[300px]"
              />
            </div>
          </li>
          <li className="flex gap-4 items-center justify-between p-4 service-item">
            <div className="flex items-start gap-4">
              <div className="service-number md:text-[2rem] font-semibold text-[#717342]">
                02
              </div>
              <div>
                <h3 className="text-[1.25rem] md:text-[4rem] font-bold leading-none uppercase">
                  WEDDINGS
                </h3>
                <p className="service-text-btn max-w-[500px] mt-2 hidden ">
                  Select the perfect wedding package for your special day. Our
                  customizable options ensure that every moment, from the
                  smallest details to the grandest events
                </p>
                <div className="hidden service-text-btn">
                  <Button
                    type="secondary"
                    className="max-w-max mt-4 hidden md:block"
                    icon="/assets/open-arrow.svg"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1rem] hidden md:block min-h-[250px] overflow-hidden">
              <img
                src="/assets/service-wedding.jpg"
                alt="service pictures"
                className="service-image object-cover w-[200px] min-w-[300px]"
              />
            </div>
          </li>
          <li className="flex gap-4 items-center justify-between p-4 service-item">
            <div className="flex items-start gap-4">
              <div className="service-number md:text-[2rem] font-semibold text-[#717342]">
                03
              </div>
              <div>
                <h3 className="text-[1.25rem] md:text-[4rem] font-bold leading-none uppercase">
                  EVENTS
                </h3>
                <p className="service-text-btn max-w-[500px] mt-2 hidden ">
                  We also offer professional photography and videography
                  services for corporate events and functions.
                </p>
                <div className="hidden service-text-btn">
                  <Button
                    type="secondary"
                    className="max-w-max mt-4 hidden md:block"
                    icon="/assets/open-arrow.svg"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1rem] hidden md:block min-h-[250px] overflow-hidden">
              <img
                src="/assets/service-event.jpg"
                alt="service pictures"
                className="service-image object-cover w-[200px] min-w-[300px]"
              />
            </div>
          </li>
          <li className="flex gap-4 items-center justify-between p-4 service-item">
            <div className="flex items-start gap-4">
              <div className="service-number md:text-[2rem] font-semibold text-[#717342]">
                04
              </div>
              <div>
                <h3 className="text-[1.25rem] md:text-[4rem] font-bold leading-none uppercase">
                  Solo & Family
                </h3>
                <p className="service-text-btn max-w-[500px] mt-2 hidden ">
                  Capture the essence of your individuality or the bond of your
                  family with our expertly crafted Solo & Family Photography
                  package.
                </p>
                <div className="hidden service-text-btn">
                  <Button
                    type="secondary"
                    className="max-w-max mt-4 hidden md:block"
                    icon="/assets/open-arrow.svg"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1rem] hidden md:block min-h-[250px] overflow-hidden">
              <img
                src="/assets/service-portrait.jpg"
                alt="service pictures"
                className="service-image object-cover w-[200px] min-w-[300px]"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
