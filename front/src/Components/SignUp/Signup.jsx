// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Sigup.css";
// import { registerUser } from "../../api.js";
// import { toast } from "react-toastify";
// import Modal from "react-modal";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [successModalOpen, setSuccessModalOpen] = useState(false);
//   const [errorModalOpen, setErrorModalOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await registerUser(formData);
//     console.log(response); // Debugging - Check full response

//     if (response.status === 201) {  // ✅ Fixed - Check full response
//       toast.success("Signed up successfully!", { position: "top-right", autoClose: 3000 });
//       setSuccessModalOpen(true);
//     } else {
//       setErrorMessage(response?.data?.message || "Unexpected error"); // 🔥 Get API error message if available
//       setErrorModalOpen(true);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     setErrorMessage(error.response?.data?.message || error.message);
//     setErrorModalOpen(true);
//   }
// };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>

//         <div className="input-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>

//         <button type="submit" className="signup-btn">Sign Up</button>
//       </form>

//       {/* Success Modal */}
//       <Modal
//         isOpen={successModalOpen}
//         onRequestClose={() => {
//           setSuccessModalOpen(false);
//           navigate("/signin"); // Redirect after closing
//         }}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//         ariaHideApp={false}
//       >
//         <h2>🎉 Success!</h2>
//         <p>Your account has been created successfully.</p>
//         <button onClick={() => navigate("/signin")} className="modal-close-btn">Go to Sign In</button>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         isOpen={errorModalOpen}
//         onRequestClose={() => setErrorModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//         ariaHideApp={false}
//       >
//         <h2>⚠️ Error</h2>
//         <p>{errorMessage}</p>
//         <button onClick={() => setErrorModalOpen(false)} className="modal-close-btn">Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default Signup;













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Sigup.css";
// import { toast } from "react-toastify";
// import Modal from "react-modal";
// import { useRegisterUserMutation } from "../../redux/apiSlice";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [registerUser] = useRegisterUserMutation();
//   const [successModalOpen, setSuccessModalOpen] = useState(false);
//   const [errorModalOpen, setErrorModalOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await registerUser(formData).unwrap();
//       toast.success("Signed up successfully!", { position: "top-right", autoClose: 3000 });
//       setSuccessModalOpen(true);
//     } catch (error) {
//       setErrorMessage(error?.data?.message || "Unexpected error");
//       setErrorModalOpen(true);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>

//         <div className="input-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>

//         <button type="submit" className="signup-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sigup.css";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useRegisterUserMutation } from "../../redux/apiSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerUser] = useRegisterUserMutation();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData).unwrap();
      
      // Show success toast
      toast.success("Signed up successfully!", { position: "top-right", autoClose: 3000 });

      // Reset form fields
      setFormData({ name: "", email: "", password: "" });

      // Show success modal
      setSuccessModalOpen(true);
    } catch (error) {
      setErrorMessage(error?.data?.message || "Unexpected error");
      setErrorModalOpen(true);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      {/* Success Modal */}
      <Modal
        isOpen={successModalOpen}
        onRequestClose={() => {
          setSuccessModalOpen(false);
          navigate("/signin"); // Navigate to login page
        }}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <h2>🎉 Success!</h2>
        <p>Your account has been created successfully.</p>
        <button onClick={() => navigate("/signin")} className="modal-close-btn">Go to Sign In</button>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={errorModalOpen}
        onRequestClose={() => setErrorModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <h2>⚠️ Error</h2>
        <p>{errorMessage}</p>
        <button onClick={() => setErrorModalOpen(false)} className="modal-close-btn">Close</button>
      </Modal>
    </div>
  );
};

export default Signup;