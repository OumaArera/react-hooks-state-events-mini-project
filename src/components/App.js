import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState("All");

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const tasksToShow = tasks.filter(
    (task) => currentCategory === "All" || task.category === currentCategory
  );

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        currentCategory={currentCategory}
        onSelectCategory={setCurrentCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={addNewTask}
      />
      <TaskList tasks={tasksToShow} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
