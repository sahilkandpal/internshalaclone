import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="##">
          <img src="logo.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-items">
        <ul>
          <a href="##">
            <li className="navbar-item">Internships</li>
          </a>
          <a href="##">
            <li className="navbar-item">
              <span>Online Trainings</span>
              <span className="offer">OFFER</span>
            </li>
          </a>
          <a href="##">
            <li className="navbar-item">Fresher Jobs</li>
          </a>
          <a href="##">
            <li className="navbar-item">
              <div className="btn navbar-btn-light">Login</div>
            </li>
          </a>
        </ul>
        <a href="##">
          <li className="navbar-item">
            <div className="btn navbar-btn-dark">Register</div>
          </li>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
