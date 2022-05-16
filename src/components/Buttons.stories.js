import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: "Default",
  primary: true,
  label: "Button",
  disabled: false,
  icon: true,
};

export const secondary = Template.bind({});
secondary.args = {
  colorScheme: "Default",
  label: "Button",
};
export const icon = Template.bind({});
icon.args = {
  icon: true,
  label: "",
};

export const large = Template.bind({});
large.args = {
  size: "Large",
  label: "Button",
};

export const small = Template.bind({});
small.args = {
  size: "Small",
  label: "Button",
};
export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  label: "Button",
};
export const danger = Template.bind({});
danger.args = {
  colorScheme: "Danger",
  primary: true,
  label: "Button",
};
export const success = Template.bind({});
success.args = {
  colorScheme: "Success",
  primary: true,
  label: "Button",
};
export const warning = Template.bind({});
warning.args = {
  colorScheme: "Warning",
  primary: true,
  label: "Button",
};
export const info = Template.bind({});
info.args = {
  colorScheme: "Info",
  primary: true,
  label: "Button",
};
