import Checkbox from "../src/components/Checkbox";
import "./../src/index.css";
//asdasdas

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  backgrounds: {
    default: "grey",
    values: [
      { name: "grey", value: "#f0f0f0" },
      { name: "white", value: "#FFFFFF" },
      { name: "dark", value: "	#000000" },
    ],
  },
};
