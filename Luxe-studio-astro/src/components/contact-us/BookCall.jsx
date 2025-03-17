import Button from "../Button";

function BookCall() {
  return (
    <div className="mb-[2rem] mt-[4rem]">
      <h2 className="text-center text-[2rem] py-2">
        Let's discuss your dream event
      </h2>
      <Button
        className="m-auto"
        btnLink="https://calendly.com/habibniloy/luxe-studios"
        newTab={true}
      >
        Book a Call
      </Button>
    </div>
  );
}

export default BookCall;
