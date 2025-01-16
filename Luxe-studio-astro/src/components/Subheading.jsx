export default function Subheading({ children }) {
  return (
    <div className="relative text-[#717342] mt-[4rem] md:mt-[10rem] mb-[1rem] md:mb-[2rem] px-[5vw] md:px-[10vw]">
      <span className="absolute text-[3.5rem] bottom-[-10px] md:bottom-[-35px] md:text-[8rem] font-semibold opacity-10 whitespace-nowrap select-none">
        {children}
      </span>
      <h2 className="text-[2rem] md:text-[3rem] font-semibold">{children}</h2>
    </div>
  );
}
