import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
export default function Navbar() {
  const navigate = useNavigate();
  let data = useCart();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
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
                <Link className="btn btn-light mx-1" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              {localStorage.getItem("name") ? (
                <li className="nav-item">
                  <Link
                    className="btn btn-light mx-1"
                    aria-current="page"
                    to="/myorders"
                  >
                    Orders
                  </Link>
  
                </li>
                
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("name") ? (
              <div className="d-flex">
                <Link className="btn btn-light mx-1" to="/login">
                  Login
                </Link>

                <Link className="btn btn-light mx-1" to="/createuser">
                  SignUp
                </Link>
              </div>
            ) : (
              <>
                <div style={{color : "white"}}><h4>Welcome {localStorage.getItem("name")}</h4></div>
                <button
                  type="button"
                  class="btn btn-light mx-3 position-relative"
                >
                  
                  <Link to="/cart" style={{textDecoration : "none",color : "black"}}>
                    My Cart
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {data.length === 0 ? "Hello" : data.length}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </button>
                <div className="btn btn-light mx-1" onClick={handleLogout}>
                  Logout
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
