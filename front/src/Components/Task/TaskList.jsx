

import React, { useState, useEffect } from "react";
import Task from "./Task";
import UpdateTask from "./UpdateTask";
import { getTasks } from "../../api";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks); // Ensure `getTasks()` returns an array
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Append new task to state
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  // Update a task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
    setEditingTask(null);
  };

  return (
    <div className="task-list-container">
      {editingTask ? (
        <UpdateTask task={editingTask} onSave={updateTask} onCancel={() => setEditingTask(null)} />
      ) : (
        <>
          <Task onTaskSubmit={addTask} />
          <h2>Your Tasks</h2>
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks available. Add some!</p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task._id} className="task-item">
                  <div className="task-content">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <span className={`priority ${task.priority}`}>{task.priority.toUpperCase()}</span>
                  </div>
                  <div className="task-actions">
                    <button className="update-btn" onClick={() => setEditingTask(task)}>Update</button>
                    <button className="delete-btn" onClick={() => deleteTask(task._id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default TaskList;