import React from 'react'
import { FaTasks } from "react-icons/fa";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg ">
    <div className="container">
      <a className="navbar-brand" href="#"><b><FaTasks /> &nbsp;todo</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Tasks
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Pending Tasks</a></li>
              <li><a className="dropdown-item" href="#">Succesfull Tasks</a></li>
            </ul>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active btn-nav" aria-current="page" href="#">Sign Up</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active btn-nav" aria-current="page" href="#">Login</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active btn-nav" aria-current="page" href="#">Logout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                <img className="src-img" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"></img>
            </a>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
export default Navbar