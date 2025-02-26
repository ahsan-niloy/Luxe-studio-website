export default function Subheading({
  children,
  className = "mt-[4rem] sm:mt-[2rem] md:mt-[8rem]",
}) {
  return (
    <div
      className={`relative flex flex-row text-[#717342] mb-[1rem] md:mb-[2rem] px-[5vw] md:px-[10vw] w-full h-[60px] sm:h-[130px] overflow-hidden ${className}`}
    >
      <div className="absolute sm:bottom-[-30px] bottom-[-10px] md:bottom-[-35px]">
        <span className="text-[3rem] sm:text-[6rem] md:text-[8rem] font-semibold opacity-10 whitespace-nowrap select-none ">
          {children}
        </span>
      </div>
      <h2 className="text-[2rem] md:text-[3rem] font-semibold self-end">
        {children}
      </h2>
    </div>
  );
}
