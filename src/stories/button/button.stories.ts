import { createButton } from "./button";
import { StoryObj } from "@storybook/html";
import { ButtonArgs } from "./types";

export default {
  title: "Design System/Atoms/Button",
  size: {
    control: { type: "select" },
    option: ["small", "medium", "large"],
  },
};

// const Template = ({ label, ...args }) => {
//   return createButton({ label, ...args });
// };

// export const Default = Template.bind({});
// Default.args = {
//   label: "Button",
// };

export const Default: StoryObj<ButtonArgs> = {
  render: (args) => {
    return createButton({ ...args });
  },
  args: {
    label: "Button",
    size: "small",
  },
};

export const Small: StoryObj<ButtonArgs> = {
  render: Default.render,
  args: {
    label: "Button",
    size: "small",
  },
};

export const Medium: StoryObj<ButtonArgs> = {
  render: Default.render,
  args: {
    label: "Button",
    size: "medium",
  },
};

export const Large: StoryObj<ButtonArgs> = {
  render: Default.render,
  args: {
    label: "Button",
    size: "large",
  },
};
