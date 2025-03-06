import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  const showToast = () => {
    toast.success("Task added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div>
      <button onClick={showToast} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Show Success Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toaster;