import React from "react";
import TaskList from "./TaskList";

export default {
  component: TaskList,
  title: "Components/TaskList",
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Task List",
  tasks: [
    { id: 0, title: "Task 1", archived: false, important: false },
    { id: 1, title: "Task 2", archived: false, important: false },
    { id: 2, title: "Task 3", archived: false, important: false },
    { id: 3, title: "Task 4", archived: false, important: false },
    { id: 4, title: "Task 5", archived: false, important: false },
  ],
  loading: false,
};

export const withImportantTask = Template.bind({});
withImportantTask.args = {
  title: "Task List",
  tasks: [
    { id: 0, title: "Task 1", archived: false, important: false },
    { id: 1, title: "Task 2", archived: false, important: false },
    { id: 2, title: "Task 3", archived: false, important: true },
    { id: 3, title: "Task 4", archived: false, important: false },
    { id: 4, title: "Task 5", archived: false, important: true },
  ],
};

export const loading = Template.bind({});
loading.args = {
  loading: true,
};

export const empty = Template.bind({});
empty.args = {
  tasks: [],
};
