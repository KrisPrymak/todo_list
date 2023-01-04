import React from "react";
import Button from "./Button";

const ItemSecond = ({ task, isDoneTask, removeTask }) => {
  return (
    <div className="task">
      <div
        className={task.done ? "isDone" : "text"}
        onClick={() => {
          isDoneTask(task.id);
        }}
      >
        {task.text}
      </div>
      <Button
        action={() => {
          removeTask(task.id);
        }}
        text={
          <img
            className="delete"
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            alt="delete"
          />
        }
      />
    </div>
  );
};

export default ItemSecond;
