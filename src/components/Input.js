import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";
import { IconContext } from "react-icons";
import {
  IoWarningOutline,
  IoCheckmarkCircleOutline,
  IoEyeOutline,
} from "react-icons/io5";

const Input = ({
  label,
  helperText,
  disabled,
  placeholder,
  type,
  onChange,
  ...props
}) => {
  const classdisabled = disabled ? "inputDisabled" : "";
  let icon = null;
  switch (type) {
    case "Error":
      icon = <IoWarningOutline />;
      break;
    case "Success":
      icon = <IoCheckmarkCircleOutline />;
      break;
    case "Info":
      icon = <IoEyeOutline />;
      break;
    case "Plain":
      icon = null;
      break;
    default:
      icon = null;
  }

  return (
    <div
      className={
        classes.input +
        " " +
        classes["colorScheme" + type] +
        " " +
        classes[classdisabled]
      }
    >
      <label>{label}</label>
      <div className={classes.inputSpace}>
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          name={label}
          onChange={onChange}
        />
        <IconContext.Provider
          value={{
            className: classes.inputIcon,
          }}
        >
          {icon}
        </IconContext.Provider>
      </div>

      <p className={classes.helperText}>{helperText}</p>
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["Error", "Success", "Info", "Plain"]),
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  disabled: false,
  label: "Label",
  helperText: "helper text input",
  type: "Info",
  placeholder: "Placeholder",
  onChange: undefined,
};
