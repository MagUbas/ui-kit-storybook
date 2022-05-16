import React from "react";
import Input from "./Input";

export default {
  component: Input,
  title: "Components/Input",
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  disabled: false,
  helperText: "Helper text input",
  placeholder: "Placeholder",
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};

export const error = Template.bind({});
error.args = {
  type: "Error",
};

export const info = Template.bind({});
info.args = {
  type: "Info",
};

export const plain = Template.bind({});
plain.args = {
  type: "Plain",
};

export const success = Template.bind({});
success.args = {
  type: "Success",
};
