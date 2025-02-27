import React, { useState } from "react";
import "./UpdateTask.css";

const UpdateTask = ({ task, onSave, onCancel }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedTask);
  };

  return (
    <div className="update-task-container">
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={updatedTask.title} onChange={handleChange} required />
        <textarea name="description" value={updatedTask.description} onChange={handleChange} required></textarea>
        <div className="buttons">
          <button type="submit">Save Changes</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;