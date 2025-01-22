import Button from "../Button";

export default function Header() {
  return (
    <header className="relative">
      <div className="z-10 absolute top-[25%] w-full px-4">
        <h1 className=" text-white text-[2rem] sm:text-[4rem] text-center font-semibold ">
          Crafting Beautiful
          <br />
          Wedding Memories
        </h1>
        <Button className="mx-auto mt-2 sm:scale-110">Book a Call</Button>
      </div>
      <img
        src="/assets/headerImg.jpg"
        alt="header images "
        className="w-[100vw] hidden lg:block"
      />
      <img
        src="/assets/headerImgPhone.jpg"
        alt="header images "
        className="w-[100vw] lg:hidden"
      />
    </header>
  );
}
