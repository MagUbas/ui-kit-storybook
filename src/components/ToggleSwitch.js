import React from "react";
import classes from "./ToggleSwitch.module.css";
import PropTypes from "prop-types";

const ToggleSwitch = ({ label, disabled, onChecked, ...props }) => {
  const handleOnChange = (e) => {
    onChecked(e.target.checked);
  };
  return (
    <div className={classes.toggleSwitch}>
      <label className={classes.switch}>
        <input type="checkbox" disabled={disabled} onChange={handleOnChange} />
        <span className={classes.slider}></span>
      </label>
      <p>{label}</p>
    </div>
  );
};

export default ToggleSwitch;

ToggleSwitch.propTypes = {
  disabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  label: "Label",
  disabled: false,
};
