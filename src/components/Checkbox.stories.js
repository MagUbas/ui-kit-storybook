import React from "react";
import Checkbox from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Label",
  disabled: false,
};
export const secondary = Template.bind({});
secondary.args = {
  label: "Label",
};
export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  label: "Label",
};

export const large = Template.bind({});
large.args = {
  size: "Large",
  label: "Label",
};

export const small = Template.bind({});
small.args = {
  size: "Small",
  label: "Label",
};
