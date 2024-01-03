import { Meta, StoryObj } from "@storybook/html";
import { withActions } from "@storybook/addon-actions/decorator";

import { createButton } from "./button";
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
    withActions,
  ],
  parameters: {
    docs: {
      page: ButtonDocumentation,
    },
    actions: {
      handles: ["mouseover"],
    },
    backgrounds: {
      default: "default",
      values: [
        { name: "blackFriday", value: "#000" },
        { name: "default", value: "#fff" },
      ],
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
      description: "Button size",
      defaultValue: "small",
      control: {
        type: "radio",
      },
    },
    onClick: {
      description: "Event",
      action: "clicked",
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
