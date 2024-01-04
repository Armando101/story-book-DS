import type { Preview } from "@storybook/html";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewPorts = {
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
  samsung: {
    name: "samsung",
    styles: {
      width: "360px",
      height: "540px",
    },
  },
  tabletLite: {
    name: "samsungHorizontal",
    styles: {
      width: "1024px",
      height: "540px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewPorts,
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
      default: "someDefault",
    },
  },
};

export default preview;
