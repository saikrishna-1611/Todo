import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api.js";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Credentials:", formData);
    
    try {
      const response = await loginUser(formData);
      
      if (response && response.status === 200) {
        // Store JWT token in localStorage
        localStorage.setItem("token", response.data.token);

        alert("Login successful");
        navigate("/about-us"); // Redirect user after login
      } else {
        alert("Unexpected error: " + response?.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;