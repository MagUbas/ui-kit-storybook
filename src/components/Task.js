import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import classes from "./Task.module.css";
import Checkbox from "./Checkbox";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Task = ({
  important,
  archived,
  title,
  handleImportant,
  onReady,
  ...props
}) => {
  const [mode, setMode] = useState("");

  let icon = important ? <AiFillStar /> : <AiOutlineStar />;
  const changeImportant = () => {
    handleImportant();
    setMode("loadingTask");
    setTimeout(() => {
      setMode("");
    }, 1500);
  };
  if (archived) {
    icon = null;
  }
  const onChecked = (state) => {
    onReady(state);
  };

  return (
    <div className={classes.task + " " + classes[mode]}>
      <Checkbox label={title} disabled={archived} onChecked={onChecked} />
      <span onClick={changeImportant}>
        <IconContext.Provider value={{ className: classes.taskIcon }}>
          {icon}
        </IconContext.Provider>
      </span>
    </div>
  );
};

export default Task;

Task.propTypes = {
  archived: PropTypes.bool,
  important: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Task.defaultProps = {
  archived: false,
  important: false,
  title: "Task",
  onReady: () => {
    return "";
  },
  handleImportant: () => {
    return "";
  },
};
