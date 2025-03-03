import Subheading from "../Subheading";
import MailerLiteIntegration from "../MailerLiteIntegration";

export default function ContactUs() {
  return (
    <section className="flex flex-col gap-10 md:flex-row justify-between my-[6rem]">
      <div className=" w-full">
        <Subheading className="mt-[0px]">Contact Us</Subheading>
        <MailerLiteIntegration />
      </div>
      <div className="grid place-content-center overflow-hidden rounded-[2rem] max-w-[500px] mx-[5vw] md:mr-[10vw] contact-us-info">
        <div className="p-4  bg-[#F0EEE8] rounded-xl">
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
      </div>
    </section>
  );
}
