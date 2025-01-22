import Subheading from "../Subheading";
import MailerLiteIntegration from "../MailerLiteIntegration";

export default function ContactUs() {
  return (
    <section className="flex flex-col gap-10 md:flex-row justify-between my-[8rem]">
      <div className=" w-full">
        <Subheading className="md:mt-[0px]">Contact Us</Subheading>
        <MailerLiteIntegration />
      </div>
      <div className="relative overflow-hidden rounded-[2rem] max-w-[500px] mx-[5vw] md:mr-[10vw] mx-auto  mx-4">
        <div className="p-4 absolute bg-[#F0EEE8] rounded-xl top-[25%] left-[18%] sm:top-[33%] sm:left-[22%]">
          <address className="not-italic">
            <span>Email</span>
            <p>
              <a href="mailto:Luxestudioca@gmail.com">Luxestudioca@gmail.com</a>
            </p>
            <hr className="my-4" />
            <span>Phone</span>
            <p>
              <a href="tel:+16728330055">+1 672-833-0055</a>
            </p>
          </address>
        </div>
        <img
          src="/assets/contact-us.jpg"
          alt="A visual representation of contacting Luxe Studio"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
  );
}
