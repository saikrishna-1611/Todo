// import React, { useState } from "react";
// import "./UpdateTask.css";

// const UpdateTask = ({ task, onSave, onCancel }) => {
//   const [updatedTask, setUpdatedTask] = useState({ ...task });

//   const handleChange = (e) => {
//     setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(updatedTask);
//   };

//   return (
//     <div className="update-task-container">
//       <h2>Update Task</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="title" value={updatedTask.title} onChange={handleChange} required />
//         <textarea name="description" value={updatedTask.description} onChange={handleChange} required></textarea>
//         <div className="buttons">
//           <button type="submit">Save Changes</button>
//           <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateTask;

import React, { useState } from "react";
import { useUpdateTaskMutation } from "../redux/apiSlice";

const UpdateTask = ({ task }) => {
  const [taskData, setTaskData] = useState({ title: task.title, description: task.description });
  const [updateTask] = useUpdateTaskMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask({ id: task.id, taskData });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
      />
      <textarea
        value={taskData.description}
        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default UpdateTask;