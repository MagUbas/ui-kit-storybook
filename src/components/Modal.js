import React from "react";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";

import Button from "./Button";
import {
  IoWarningOutline,
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const Modal = ({ type, title, ...props }) => {
  let icon = null;
  let classIcon = "";
  switch (type) {
    case "Info":
      icon = <IoInformationCircleOutline />;
      classIcon = "iconDefault";
      break;
    case "Warning":
      icon = <IoWarningOutline />;
      classIcon = "iconWarning";
      break;
    case "Success":
      icon = <IoCheckmarkCircleOutline />;
      classIcon = "iconSuccess";
      break;
    case "Danger":
      icon = <IoWarningOutline />;
      classIcon = "iconDanger";
      break;
    case "Default":
      icon = null;
      break;
    default:
      icon = null;
  }

  const handleClose = () => {
    console.log("close");
  };
  const handleNext = () => {
    console.log("next");
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <IconContext.Provider
            value={{
              className: classes.modalIcon + " " + classes[classIcon],
            }}
          >
            {icon}
          </IconContext.Provider>
          <h4>{title}</h4>
        </div>
        <div className={icon ? classes.modalBody : classes.modalBodyNoIcon}>
          Grunion, "brook lamprey loweye catfish rocket danio jewfish?" Electric
          ray mouthbrooder, haddock treefish garpike, ribbon sawtail fish ling
          cod, "combtooth blenny, salmon Atlantic herring longnose dace yellow
          perch Atlantic eel?"
        </div>
        <div className={classes.modalFooter}>
          <Button
            primary={true}
            label="Close"
            colorScheme={type}
            onClick={handleClose}
          ></Button>
          <Button
            icon={true}
            primary={false}
            label="Next"
            colorScheme={type}
            onClick={handleNext}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  type: PropTypes.oneOf(["Default", "Info", "Warning", "Success", "Danger"]),
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  type: "default",
  title: "Modal Window",
};
