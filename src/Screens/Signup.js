import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import Navbar2 from "../Components/Navbar2";
import videBg from "../Assests/video3.mp4"
import './Login.css'
const Signup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const HandleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:9000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
        location: details.location,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (!result.success) {
      alert("Enter valid credentials");
    }
    localStorage.setItem("name",details.name);
    navigate('/home');
  };
  return (
    <>
      <Navbar2 />
      <video src = {videBg} autoPlay loop muted />
      <div className="content" style={{height : "600px",marginLeft : "420px",marginTop : "30px"}}>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name"style={{marginRight : "370px",color: "white"}}>Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={details.name}
              onChange={HandleChange}
            />
          </div>
          <br />
          <div class="form-group">
            <label for="exampleInputEmail1" style={{marginRight : "320px",color: "white"}}>Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={details.email}
              onChange={HandleChange}
            />
          </div>
          <br />
          <div class="form-group">
            <label for="exampleInputPassword1"style={{marginRight : "350px",color: "white"}}>Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={details.password}
              onChange={HandleChange}
            />
            <p style={{color : "white"}}>minimum length : 10</p>
          </div>
          < br/>
          <div class="form-group">
            <label for="exampleInputPassword1"style={{marginRight : "360px",color: "white"}}>Address</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Location"
              name="location"
              value={details.location}
              onChange={HandleChange}
            />
          </div>
          <br/>
          <button type="submit" class="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User?
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
