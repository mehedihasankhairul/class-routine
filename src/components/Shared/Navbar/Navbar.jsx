import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="mainNavbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/">
            <li href="/" className="navbar-brand">
              My School Routine
            </li>
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/">
                {" "}
                <li className="nav-item nav-link active">Home</li>
              </Link>

              <Link to="/routines">
                <li className="nav-item nav-link">Routines</li>
              </Link>
              {/* <a href="/" className="nav-item nav-link disabled" tabIndex="-1">
                Reports
              </a> */}
            </div>
            <div className="navbar-nav ms-auto">
              <li href="/" className="nav-item nav-link">
                Login
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
