import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";
import videBg from "../Assests/video3.mp4"
import './Login.css'

const Login = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const HandleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (!result.success) {
      alert("Enter valid credentials");
    }
    if (result.success) {
      localStorage.setItem("userEmail", details.email);
      localStorage.setItem("name",result.name);
      localStorage.setItem("authToken", result.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/home");
    }
  };
  return (
    <>
      <Navbar2 />
  
      <video src = {videBg} autoPlay loop muted />
      <div className="content" style={{height : "500px",marginLeft : "420px",marginTop : "60px"}}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1" style={{marginRight : "320px",color: "white"}}>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={details.email}
              onChange={HandleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputPassword1"style={{marginRight : "350px",color: "white"}}>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={details.password}
              onChange={HandleChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
           Register Now
          </Link>
        </form>
        
      </div>
      
    </>
  );
};

export default Login;
