// import React from 'react'
// import { FaTasks } from "react-icons/fa";
// import "./Navbar.css";
// export const Navbar = () => {
//   return (
//     <div><nav className="navbar navbar-expand-lg ">
//     <div className="container">
//       <a className="navbar-brand" href="#"><b><FaTasks /> &nbsp;todo</b></a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">About Us</a>
//           </li>
          
//           <li className="nav-item mx-2">
//             <a className="nav-link active btn-nav" aria-current="page" href="#">Sign Up</a>
//           </li>
//           <li className="nav-item mx-2">
//             <a className="nav-link active btn-nav" aria-current="page" href="#">Login</a>
//           </li>
//           <li className="nav-item mx-2">
//             <a className="nav-link active btn-nav" aria-current="page" href="#">Logout</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//                 <img className="src-img" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="image-icon"></img>
//             </a>
//           </li>
          
          
//         </ul>
        
//       </div>
//     </div>
//   </nav></div>
//   )
// }
// export default Navbar

import React from "react";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>
              <FaTasks /> &nbsp;todo
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active btn-nav" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active btn-nav" to="/signin">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  <img
                    className="src-img"
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    alt="User Icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;