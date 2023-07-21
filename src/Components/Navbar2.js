import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h3>Barbeque City</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="btn btn-light mx-3" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-light mx-3"
                  aria-current="page"
                  to="/menu"
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-light mx-3"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-light mx-3"
                  aria-current="page"
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="btn btn-light mx-3 position-relative"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
