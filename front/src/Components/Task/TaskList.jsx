


// import React, { useEffect } from "react";
// import Task from "./Task";
// import { getTasks } from "../../api";
// import "./TaskList.css";
// import { useDispatch, useSelector } from "react-redux";
// import { setTasks, deleteTask } from "../../redux/taskSlice";

// const TaskList = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const fetchedTasks = await getTasks();
//         dispatch(setTasks(fetchedTasks));
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       }
//     };
//     fetchTasks();
//   }, [dispatch]);

//   return (
//     <div className="task-list-container">
//       <Task />
//       <h2>Your Tasks</h2>
//       {tasks.length === 0 ? (
//         <p className="no-tasks">No tasks available. Add some!</p>
//       ) : (
//         <ul className="task-list">
//           {tasks.map((task) => (
//             <li key={task._id} className="task-item">
//               <div className="task-content">
//                 <h3>{task.title}</h3>
//                 <p>{task.description}</p>
//                 <span className={`priority ${task.priority}`}>{task.priority.toUpperCase()}</span>
//               </div>
//               <div className="task-actions">
//                 <button className="update-btn">Update</button>
//                 {/* <button className="delete-btn" onClick={() => dispatch(deleteTask(task._id))}>Delete</button> */}
//                 <button
//   className="delete-btn"
//   onClick={async () => {
//     try {
//       await deleteTask(task._id); // API call to backend
//       dispatch(deleteTask(task._id)); // Update Redux store after success
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   }}
// >
//   Delete
// </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskList;









import React from "react";
import Task from "./Task";
import "./TaskList.css";
import { useDispatch } from "react-redux";
import { useGetTasksQuery, useDeleteTaskMutation } from "../../redux/apiSlice";
import { deleteTask } from "../../redux/taskSlice";
import { toast } from "react-toastify";

const TaskList = () => {
  const dispatch = useDispatch();
  const { data: tasks = [], error, isLoading } = useGetTasksQuery(); 
  const [deleteTaskMutation] = useDeleteTaskMutation(); 

  const handleDelete = async (taskId) => {
    try {
      await deleteTaskMutation(taskId).unwrap();
      dispatch(deleteTask(taskId)); 
      toast.success("Task deleted successfully!", { position: "top-right", autoClose: 3000 });
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task", { position: "top-right", autoClose: 3000 });
    }
  };

  if (isLoading) return <p className="loading">Loading tasks...</p>;
  if (error) return <p className="error">Error fetching tasks!</p>;

  return (
    <div className="task-list-container">
      <Task />
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
                <button className="update-btn">Update</button>
                <button className="delete-btn" onClick={() => handleDelete(task._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;