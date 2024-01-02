import { ButtonArgs } from "./types";
import "./button.css";

export const createButton = ({
  style = "outline",
  size = "small",
  label = "button",
}: ButtonArgs) => {
  const button = document.createElement("button");
  button.innerHTML = label;
  button.type = "submit";
  button.role = "button";
  button.className = `button button--${style} button--${size}`;
  return button;
};
