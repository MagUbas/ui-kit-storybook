import React from "react";
import Task from "./Task";

export default {
  component: Task,
  title: "Components/Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Task",
  archived: false,
  important: false,
  ready: false,
};

export const important = Template.bind({});
important.args = {
  title: "Task",
  important: true,
};

export const archived = Template.bind({});
archived.args = {
  title: "Task",
  archived: true,
};
