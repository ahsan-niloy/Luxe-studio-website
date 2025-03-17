import "./index.css";

export default function Button({
  children = "add clildren",
  type = "primary",
  icon = "",
  className = "",
  btnLink = "#",
  newTab = false,
}) {
  const buttonType =
    type === "secondary"
      ? "secondary-button button-content"
      : "primary-button button-content";

  return (
    <a href={btnLink} target={newTab ? "_blank" : ""}>
      <button className={`${buttonType} ${className || ""}`}>
        {children} {icon != "" ? <img src={icon} alt="button icon" /> : ""}
      </button>
    </a>
  );
}
