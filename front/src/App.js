
import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SignIn from "./Components/SignIn/Signin.jsx";
import Signup from "./Components/SignUp/Signup.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { About } from "./Components/About/About.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import TaskList from "./Components/Task/TaskList.jsx";

const Layout = () => (
  <>
    <Navbar />
    <TaskList/>
    <Outlet /> 
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;