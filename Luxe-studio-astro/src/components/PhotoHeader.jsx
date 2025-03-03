function PhotoHeader({ children, image }) {
  return (
    <div className="relative">
      {children}
      <img
        src={image}
        alt="photo cover"
        className="object-cover max-h-[400px] w-screen"
      />
    </div>
  );
}

export default PhotoHeader;
