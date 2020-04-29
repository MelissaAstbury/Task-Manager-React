import React, { createContext, useState } from "react";
import { v4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Wash my hair", id: 1 },
    { title: "Write some code", id: 2 },
    { title: "Paint my nails", id: 3 },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title: title, id: v4() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
