import React from "react";
import Modal from "./Modal";

export default {
  component: Modal,
  title: "Components/Modal",
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "Default",
  title: "Modal Window",
};

export const info = Template.bind({});
info.args = {
  type: "Info",
  title: "Modal Window",
};
export const warning = Template.bind({});
warning.args = {
  type: "Warning",
  title: "Modal Window",
};
export const success = Template.bind({});
success.args = {
  type: "Success",
  title: "Modal Window",
};
export const danger = Template.bind({});
danger.args = {
  type: "Danger",
  title: "Modal Window",
};
