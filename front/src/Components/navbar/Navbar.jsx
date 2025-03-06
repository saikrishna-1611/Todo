
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaTasks } from "react-icons/fa";
// import "./Navbar.css";

// export const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <b>
//               <FaTasks /> &nbsp;todo
//             </b>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/about-us">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item mx-2">
//                 <Link className="nav-link active btn-nav" to="/signup">
//                   Sign Up
//                 </Link>
//               </li>
//               <li className="nav-item mx-2">
//                 <Link className="nav-link active btn-nav" to="/signin">
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link active" to="#">
//                   <img
//                     className="src-img"
//                     src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
//                     alt="User Icon"
//                   />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import "./Navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin"); // Redirect to signin page
  };

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

              {!token ? (
                <>
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
                </>
              ) : (
                <li className="nav-item mx-2">
                  <button className="nav-link active btn-nav" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}

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