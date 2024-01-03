import { createButton } from "./button";
import { Meta, StoryObj } from "@storybook/html";
import type { ButtonArgs } from "./types";
import ButtonDocumentation from "./button.mdx";

const meta: Meta<ButtonArgs> = {
  title: "Design System/Atoms/Button",
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.style.margin = "1.5rem";
      decorator.appendChild(story() as HTMLElement);
      return decorator;
    },
  ],
  parameters: {
    docs: {
      page: ButtonDocumentation,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "label",
      type: "string",
    },
    style: {
      name: "style",
      options: ["filled", "outlined"],
      control: {
        type: "radio",
      },
    },
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;

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
