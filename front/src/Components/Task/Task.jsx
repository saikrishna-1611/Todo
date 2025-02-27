
import React, { useState } from "react";
import "./Task.css";
import { createTask } from "../../api";

const Task = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    try {
      const newTask = await createTask({ title, description, priority });

      // Send new task to TaskList
      onTaskSubmit(newTask);

      // Reset form fields
      setTitle("");
      setDescription("");
      setPriority("medium");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="task-form-container">
      <h2 style={{ color: "white" }}>Add a Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="priority-options">
          <label>
            <input
              type="radio"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={(e) => setPriority(e.target.value)}
            />
            High
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={(e) => setPriority(e.target.value)}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="low"
              checked={priority === "low"}
              onChange={(e) => setPriority(e.target.value)}
            />
            Low
          </label>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Task;
