import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./TaskList.module.css";
import Task from "./Task";
import Button from "./Button";
import Input from "./Input";
import { IoMdCheckmark } from "react-icons/io";
import { IconContext } from "react-icons";

const TaskList = ({ title, tasks, loading, ...props }) => {
  const [tasksList, setTasksList] = useState(tasks);
  const [inputValue, setInputValue] = useState({});
  const [uniqueId, setUniqueId] = useState(0);

  const handleImportant = (id) => {
    const tempTasksList = [...tasksList];
    tempTasksList.forEach((elem) => {
      if (elem.id === id) {
        elem.important = !elem.important;
      }
    });
    changeOrder(tempTasksList);
  };
  const onReady = (id, state) => {
    const tempTaskList = [...tasksList];
    tempTaskList.forEach((elem) => {
      if (elem.id === id) {
        elem.ready = state;
      }
    });

    setTasksList(tempTaskList);
  };

  const handleArchive = () => {
    const tempTasksList = [...tasksList];
    tempTasksList.forEach((elem) => {
      if (elem.ready === true) {
        elem.archived = true;
        elem.important = false;
      }
    });
    changeOrder(tempTasksList);
  };
  const handleDeleteHistory = () => {
    const newTasksList = [];
    tasksList.forEach((elem) => {
      if (elem.archived === false) {
        newTasksList.push(elem);
      }
    });
    changeOrder(newTasksList);
  };

  const changeOrder = (tempTasksList) => {
    let importantList = [];
    let archivedList = [];
    let restList = [];

    tempTasksList.forEach((elem) => {
      if (elem.important === true) {
        importantList.push(elem);
      } else {
        if (elem.archived === true) {
          archivedList.push(elem);
        } else {
          restList.push(elem);
        }
      }
    });

    const newTasksList = importantList.concat(restList, archivedList);

    setTasksList(newTasksList);
  };
  const handleAddNewTask = () => {
    const tempTasksList = [...tasksList];
    tempTasksList.push({
      id: tasksList.length,
      title: inputValue,
      archived: false,
      important: false,
    });
    setInputValue("");
    setUniqueId(Math.random());
    changeOrder(tempTasksList);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {}, []);

  let loadingRow = (
    <div className={classes.loadingTasks}>
      <span className={classes.checkBoxLoading} />
      <span className={classes.textLoadingLong} />
      <span className={classes.textLoadingShort} />
      <span className={classes.textLoadingShort} />
    </div>
  );
  let content = (
    <div>
      {loadingRow}
      {loadingRow}
      {loadingRow}
      {loadingRow}
    </div>
  );

  if (!loading) {
    if (tasksList.length > 0) {
      content = tasksList.map((elem) => {
        return (
          <Task
            onReady={(state) => onReady(elem.id, state)}
            key={elem.id}
            title={elem.title}
            archived={elem.archived}
            important={elem.important}
            handleImportant={() => handleImportant(elem.id)}
          />
        );
      });
    } else {
      content = (
        <div className={classes.taskListEmpty}>
          <IconContext.Provider value={{ color: "#6DCC76", size: "50px" }}>
            <IoMdCheckmark />
          </IconContext.Provider>

          <p>Everything done</p>
          <p>Add something new</p>
        </div>
      );
    }
  }

  return (
    <div className={classes.taskList}>
      <h1 style={{ maxWidth: "100%", overflowWrap: "break-word" }}>{title}</h1>
      <div className={classes.taskInput}>
        <Input
          key={uniqueId}
          label=""
          helperText=""
          placeholder="New task"
          type="Plain"
          onChange={handleInputChange}
        />
        <Button
          onClick={handleAddNewTask}
          label=""
          size="Small"
          disabled={loading}
        />
      </div>
      {content}
      <div className={classes.tasksButtons}>
        <Button onClick={handleArchive} label="Archive" disabled={loading} />
        <Button
          onClick={handleDeleteHistory}
          label="Delete history"
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
};

TaskList.defaultProps = {
  title: "Task List",
  tasks: [
    { id: 0, title: "Task 1", archived: false, important: false },
    { id: 1, title: "Task 2", archived: false, important: false },
    { id: 2, title: "Task 3", archived: false, important: true },
    { id: 3, title: "Task 4", archived: false, important: false },
    { id: 4, title: "Task 5", archived: false, important: true },
  ],
};
