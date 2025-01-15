export default function TextSection() {
  return (
    <div className="text-[#717342] text-center py-[6rem] px-[5vw] md:px-[10vw] whitespace-nowrap">
      <div className="text-[4.5vw] lg:text-[50px]">
        Transforming Your Wedding Day into{" "}
      </div>
      <div className="text-[8vw] lg:text-[90px] font-bold leading-[50%]">
        Timeless Memories{" "}
      </div>
      <div className="flex gap-2 md:gap-4 justify-center mt-2 md:mt-8">
        <img
          src="/assets/textimage1.jpg"
          alt="coupole piture on a bite"
          className="rounded-xl max-w-[40vw]"
        />
        <img
          src="/assets/textimage2.jpg"
          alt="coupole piture of kissing"
          className="rounded-xl max-w-[40vw]"
        />
      </div>
    </div>
  );
}
