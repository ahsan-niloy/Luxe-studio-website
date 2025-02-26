export default function ImageFrame({ ImageUrl }) {
  return (
    <div className="relative rounded-xl w-[350px] h-[450px] mx-auto bg-[#717342]">
      <img
        src={ImageUrl}
        alt="Founders Picture"
        className="absolute rounded-xl w-[350px] h-[450px] top-[-5px] left-[-5px] object-cover"
      />
    </div>
  );
}
