// import React, { useState } from "react";
// import Task from "./Task";
// import "./TaskList.css";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   // Function to add a new task
//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="task-list-container">
//       <Task onTaskSubmit={addTask} />
//       <h2>Your Tasks</h2>
//       {tasks.length === 0 ? (
//         <p className="no-tasks">No tasks available. Add some!</p>
//       ) : (
//         <ul className="task-list">
//           {tasks.map((task, index) => (
//             <li key={index} className="task-item">
//               <div className="task-content">
//                 <h3>{task.title}</h3>
//                 <p>{task.description}</p>
//                 <span className={`priority ${task.priority}`}>
//                   {task.priority.toUpperCase()}
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskList;
import React, { useState } from "react";
import Task from "./Task";
import UpdateTask from "./UpdateTask";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Update a task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
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
                <li key={task.id} className="task-item">
                  <div className="task-content">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <span className={`priority ${task.priority}`}>{task.priority.toUpperCase()}</span>
                  </div>
                  <div className="task-actions">
                    <button className="update-btn" onClick={() => setEditingTask(task)}>Update</button>
                    <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
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

