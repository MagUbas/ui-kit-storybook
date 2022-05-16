import React from "react";
import classes from "./Button.module.css";
import { CgArrowRightO } from "react-icons/cg";
import PropTypes from "prop-types";

const Button = ({
  colorScheme,
  primary,
  size,
  label,
  disabled,
  icon,
  ...props
}) => {
  const mode = primary ? "buttonPrimary" : "buttonSecondary";
  let sizeIcon;
  switch (size) {
    case "Large":
      sizeIcon = 40;
      break;
    case "Small":
      sizeIcon = 18;
      break;
    default:
      sizeIcon = 25;
  }

  return (
    <div className={classes[`colorScheme${colorScheme}`]}>
      {label === "" ? (
        <button
          {...props}
          className={
            classes.icon + " " + classes[mode] + " " + classes[`icon${size}`]
          }
          disabled={disabled}
        >
          <CgArrowRightO size={sizeIcon} />
        </button>
      ) : (
        <button
          {...props}
          className={
            classes.text + " " + classes[mode] + " " + classes[`text${size}`]
          }
          disabled={disabled}
        >
          {label}
          {icon ? (
            <CgArrowRightO size={sizeIcon} style={{ marginLeft: "5px" }} />
          ) : null}
        </button>
      )}
    </div>
  );
};

export default Button;

Button.propTypes = {
  colorScheme: PropTypes.oneOf([
    "Default",
    "Danger",
    "Success",
    "Warning",
    "Info",
  ]),
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.bool,
};

Button.defaultProps = {
  colorScheme: "Default",
  primary: true,
  label: "Button",
  size: "Medium",
  onClick: undefined,
  icon: true,
};
