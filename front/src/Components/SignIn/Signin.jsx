

// import React, { useState } from "react";
// import "./Signin.css";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../api";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/authSlice";

// const SignIn = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(formData);
//       if (response && response.token) {
//         dispatch(loginSuccess({ user: response.user, token: response.token }));
//         alert("Login successful");
//         navigate("/tasks");
//       } else {
//         alert("Unexpected error: " + response?.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert("Login failed: " + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="signin-container">
//       <form className="signin-form" onSubmit={handleSubmit}>
//         <h2>Sign In</h2>
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
//         <button type="submit" className="signin-btn">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;

// import React, { useState } from "react";
// import "./Signin.css";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../api";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/authSlice";

// const SignIn = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(formData);
//       if (response && response.token) {
//         dispatch(loginSuccess({ user: response.user, token: response.token }));
//         alert("Login successful");
//         navigate("/tasks");
//       } else {
//         alert("Unexpected error: " + response?.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert("Login failed: " + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="signin-container">
//       <form className="signin-form" onSubmit={handleSubmit}>
//         <h2>Sign In</h2>
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
//         <button type="submit" className="signin-btn">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;










import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useLoginUserMutation } from "../../redux/apiSlice";
import { toast } from "react-toastify";

const SignIn = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData).unwrap(); // RTK Query API call

      if (response?.token) {
        dispatch(loginSuccess({ user: response.user, token: response.token }));
        toast.success("Login successful!", { position: "top-right", autoClose: 3000 });
        navigate("/tasks"); // Navigate after successful login
      } else {
        setErrorMessage("Unexpected error: " + response?.statusText);
      }
    } catch (error) {
      const errMsg = error?.data?.message || "Invalid credentials!";
      setErrorMessage(errMsg);
      toast.error(errMsg, { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

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

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Error Message Display */}

        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;