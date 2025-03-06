


// import React from "react";
// import { useForm } from "react-hook-form";
// import "./Task.css";
// import { createTask } from "../../api";
// import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/taskSlice";

// const Task = () => {
//   const dispatch = useDispatch();
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const newTask = await createTask(data);
//       dispatch(addTask(newTask));
//       reset();
//     } catch (error) {
//       console.error("Error creating task:", error);
//     }
//   };

//   return (
//     <div className="task-form-container">
//       <h2 style={{ color: "white" }}>Add a Task</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" placeholder="Task Title" {...register("title", { required: "Title is required" })} />
//         {errors.title && <p className="error">{errors.title.message}</p>}

//         <textarea placeholder="Task Description" {...register("description", { required: "Description is required" })} />
//         {errors.description && <p className="error">{errors.description.message}</p>}

//         {/* Priority Selection - Radio Buttons */}
//         <div className="priority-group">
//           <label>Priority:</label>
//           <label>
//             <input type="radio" value="low" {...register("priority", { required: "Priority is required" })} /> Low
//           </label>
//           <label>
//             <input type="radio" value="medium" {...register("priority", { required: "Priority is required" })} /> Medium
//           </label>
//           <label>
//             <input type="radio" value="high" {...register("priority", { required: "Priority is required" })} /> High
//           </label>
//         </div>
//         {errors.priority && <p className="error">{errors.priority.message}</p>}

//         <button type="submit">Add Task</button>
//       </form>
//     </div>
//   );
// };

// export default Task;









import React from "react";
import { useForm } from "react-hook-form";
import "./Task.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import { useCreateTaskMutation } from "../../redux/apiSlice";
import { toast } from "react-toastify";

const Task = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [createTask] = useCreateTaskMutation(); 
  const onSubmit = async (data) => {
    try {
      const newTask = await createTask(data).unwrap(); 
      dispatch(addTask(newTask)); 
      reset(); // Reset form
      toast.success("Task added successfully!", { position: "top-right", autoClose: 3000 });
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to create task", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div className="task-form-container">
      <h2 style={{ color: "white" }}>Add a Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Task Title" {...register("title", { required: "Title is required" })} />
        {errors.title && <p className="error">{errors.title.message}</p>}

        <textarea placeholder="Task Description" {...register("description", { required: "Description is required" })} />
        {errors.description && <p className="error">{errors.description.message}</p>}

        {/* Priority Selection - Radio Buttons */}
        <div className="priority-group">
          <label>Priority:</label>
          <label>
            <input type="radio" value="low" {...register("priority", { required: "Priority is required" })} /> Low
          </label>
          <label>
            <input type="radio" value="medium" {...register("priority", { required: "Priority is required" })} /> Medium
          </label>
          <label>
            <input type="radio" value="high" {...register("priority", { required: "Priority is required" })} /> High
          </label>
        </div>
        {errors.priority && <p className="error">{errors.priority.message}</p>}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Task;