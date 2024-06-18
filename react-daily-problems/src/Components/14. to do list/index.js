import React, { useState } from "react";
import "./style.css";
const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      if (isEditing) {
        const updatedTasks = tasks.map((item, index) =>
          index === currentTaskIndex ? { task, priority } : item
        );
        setTasks(updatedTasks);
        setIsEditing(false);
      } else {
        setTasks([...tasks, { task, priority }]);
      }
      setTask("");
      setPriority("low");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index].task);
    setPriority(tasks[index].priority);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#FF6B6B";
      case "medium":
        return "#FFD93D";
      case "low":
        return "#6BCB77";
      default:
        return "#6BCB77";
    }
  };

  return (
    <div className="todo-list">
      <h1>Priority To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      </form>
      <ul>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: getPriorityColor(item.priority) }}
          >
            <span>{item.task}</span>
            <div className="actions">
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
