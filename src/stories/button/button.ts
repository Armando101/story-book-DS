import { ButtonArgs } from "./types";
import "./button.css";

export const createButton = ({
  style = "outlined",
  size = "small",
  label = "button",
  onClick,
}: ButtonArgs) => {
  const button = document.createElement("button");
  button.addEventListener("click", onClick);

  button.innerHTML = label;
  button.type = "submit";
  button.role = "button";
  button.className = `button button--${style} button--${size}`;
  return button;
};
