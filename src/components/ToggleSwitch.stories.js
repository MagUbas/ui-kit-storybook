import React from "react";
import ToggleSwitch from "./ToggleSwitch";

export default {
  component: ToggleSwitch,
  title: "Components/ToggleSwitch",
};

const Template = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  disabled: false,
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};
