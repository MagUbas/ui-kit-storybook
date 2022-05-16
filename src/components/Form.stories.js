import React from "react";
import Form from "./Form";

export default {
  component: Form,
  title: "Components/Form",
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Form title",
  inputList: [
    { inputType: "text", label: "Name", placeholder: "Add your name" },
    { inputType: "text", label: "Surname", required: true },
    { inputType: "text", label: "Adress" },
    { inputType: "toggleSwitch", label: "Try me" },
    { inputType: "text", label: "Country", disabled: true },
    { inputType: "text", label: "City" },
    { inputType: "toggleSwitch", label: "Check me first" },
    { inputType: "checkbox", label: "Check me" },
  ],
  loading: false,
  customValidation: function (value) {
    let error = "";
    if (value.length < 4 && value.length > 0) {
      error = "To short. Need to be at least 3 characters long.";
    }
    return error;
  },
  submitData: function (data) {
    console.log(data);
  },
};

export const loading = Template.bind({});
loading.args = {
  loading: true,
};
