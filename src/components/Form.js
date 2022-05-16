import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";
import Checkbox from "./Checkbox";

const Form = ({
  title,
  inputList,
  loading,
  customValidation,
  submitData,
  ...props
}) => {
  const [formValid, setFormValid] = useState(true);
  const [valueList, setValueList] = useState({});
  const [errorList, setErrorList] = useState({});
  const [inputTypeList, setInputTypeList] = useState({});
  const [inputRequiredList, setInputRequiredList] = useState({});

  useEffect(() => {
    let tempValueList = {};
    let tempErrorList = {};
    let tempInputTypeList = {};
    let tempInputRequiredList = {};
    inputList.forEach((elem) => {
      if (elem.inputType === "text") {
        tempValueList[elem.label] = "";
        tempErrorList[elem.label] = "";
        tempInputTypeList[elem.label] = "Plain";
        tempInputRequiredList[elem.label] = elem.required;
      } else {
        tempValueList[elem.label] = false;
      }
    });
    setValueList(tempValueList);
    setErrorList(tempErrorList);
    setInputTypeList(tempInputTypeList);
    setInputRequiredList(tempInputRequiredList);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (Object.values(errorList).every((val) => val === "")) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [errorList]);

  const validation = (label, value) => {
    let customError = customValidation(value);
    let tempError = "";
    let finalError = "";
    let inputType = "Plain";

    if (value.length === 0 && inputRequiredList[label]) {
      tempError = `${label} is required`;
    }

    if (!customError) {
      finalError = tempError;
    } else {
      finalError = customError;
    }

    if (finalError) {
      inputType = "Error";
    } else {
      if (value) {
        inputType = "Success";
      } else {
        inputType = "Plain";
      }
    }

    setErrorList((prevState) => ({
      ...prevState,
      [label]: finalError,
    }));
    setInputTypeList((prevState) => ({
      ...prevState,
      [label]: inputType,
    }));
  };

  const handleInputChange = (event) => {
    validation(event.target.name, event.target.value);

    setValueList((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    let tempErrorList = errorList;
    for (const label in inputRequiredList) {
      if (inputRequiredList[label]) {
        if (valueList[label] === "") {
          tempErrorList[label] = `${label} is required`;
          setErrorList((prevState) => ({
            ...prevState,
            [label]: `${label} is required`,
          }));
          setInputTypeList((prevState) => ({
            ...prevState,
            [label]: "Error",
          }));
        }
      }
    }
    if (Object.values(tempErrorList).every((val) => val === "")) {
      submitData(valueList);
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const onChecked = (idLabel, state) => {
    setValueList((prevState) => ({
      ...prevState,
      [idLabel]: state,
    }));
  };

  let inputListContent = (
    <div className={classes.contentLoading}>
      <div className={classes.loader}></div>
      <p>Loading, please wait</p>
    </div>
  );

  if (!loading) {
    inputListContent = (
      <div className={classes.inputList}>
        {inputList.map((input) => {
          switch (input.inputType) {
            case "text":
              return (
                <Input
                  key={input.label}
                  label={input.label}
                  type={inputTypeList[input.label]}
                  disabled={input.disabled}
                  onChange={handleInputChange}
                  helperText={errorList[input.label]}
                  placeholder={input.placeholder ? input.placeholder : ""}
                />
              );

            case "toggleSwitch":
              return (
                <ToggleSwitch
                  key={input.label}
                  label={input.label}
                  disabled={input.disabled}
                  onChecked={(state) => onChecked(input.label, state)}
                />
              );
            case "checkbox":
              return (
                <Checkbox
                  key={input.label}
                  label={input.label}
                  disabled={input.disabled}
                  onChecked={(state) => onChecked(input.label, state)}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    );
  }

  return (
    <div className={classes.form}>
      <h3>{title}</h3>
      {inputListContent}
      <Button
        style={{ position: "relative", float: "right" }}
        label="Submit"
        onClick={handleSubmit}
        colorScheme={formValid ? "Default" : "Warning"}
      />
    </div>
  );
};

export default Form;

Form.defaultProps = {
  title: "Form Title",
  inputList: [
    { inputType: "text", label: "Name" },
    { inputType: "text", label: "Surname" },
    { inputType: "text", label: "Adress" },
    { inputType: "text", label: "Country", disabled: true },
    { inputType: "text", label: "City" },
    { inputType: "toggleSwitch", label: "Check me first" },
    { inputType: "checkbox", label: "Check me" },
  ],
};
