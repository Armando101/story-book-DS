import { StoryObj } from "@storybook/html";
import { createCard } from "./card";
import { CardArgs } from "./types";

export default {
  title: "Design System/Atoms/Card",
  size: {
    control: { type: "select" },
    option: ["small", "medium", "large"],
  },
};

export const Default: StoryObj<CardArgs> = {
  render: (args) => {
    return createCard({ ...args });
  },
  args: {
    title: "Card",
    description: "Description",
    size: "small",
  },
};
