import React from "react";
import classes from "./Checkbox.module.css";
import PropTypes from "prop-types";

const Checkbox = ({ primary, size, label, disabled, onChecked, ...props }) => {
  const handleOnChange = (e) => {
    onChecked(e.target.checked);
  };
  const mode = primary ? "checkboxInputPrimary" : "checkboxInputSecondary";

  return (
    <label
      className={classes.checkbox + " " + classes[`checkbox${size}`]}
      htmlFor={label}
    >
      <input
        className={classes.checkboxInput + " " + classes[mode]}
        type="checkbox"
        name={label}
        disabled={disabled}
        onChange={handleOnChange}
      />

      <p className={classes.checkboxLabel}>{label}</p>
    </label>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  primary: true,
  size: "Medium",
  onChecked: () => {
    return "";
  },
  disabled: false,
};
