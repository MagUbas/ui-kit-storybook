import React, { useState } from "react";
import { IconContext } from "react-icons";
import classes from "./Accordion.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, content, ...props }) => {
  const [show, setShow] = useState(false);
  const icon = show ? <IoIosArrowUp /> : <IoIosArrowDown />;
  const onShow = () => {
    setShow((prevState) => {
      return !prevState;
    });
  };
  //test
  return (
    <div className={classes.accordion}>
      <div className={classes.accordionTitle} onClick={onShow}>
        <p>{title}</p>
        <IconContext.Provider value={{ size: "20px" }}>
          {icon}
        </IconContext.Provider>
      </div>
      {show ? <p className={classes.accordionContent}>{content}</p> : null}
    </div>
  );
};

export default Accordion;
