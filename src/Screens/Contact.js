import React, { useState } from "react";
import Navbar2 from "../Components/Navbar2";
import { useNavigate } from "react-router-dom";
import Marque from "../Components/Marque";
import bgimg7 from "../Assests/Image7.jpg";
import Footer from "../Components/Footer";

function Contact() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({ name: "", phone: "" });
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:9000/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        phone: details.phone,
      }),
    });
    //const result = await res.json();
    if (res.status === 200) {
      alert("Your details are submited successfully");
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar2 />
      <Marque />
      <div className="" style={{ height: "100%", backgroundColor: "black" }}>
        <br />
        <h1 style={{ color: "white" }}>Contact Us</h1>
        <br />
        <div className="container d-flex">
          <div className="" style={{ marginRight: "100px" }}>
            <h2 style={{color : "white"}}>Address: </h2>
            <div class="card " style={{ width: "500px", height: "400px" }}>
              <div class="card-body" style={{backgroundColor : "black",color : "white"}}>
                <p>Barbeque City</p>
                <p>Cannought Lane,Barakhamba</p>
                <p>New Delhi India,203804</p>
                <p>Contact: 0120-298398,8073874387</p>
                <p>barbequeCity@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="" style={{ width: "200px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.87253943091!2d77.22110007540341!3d28.633581975664093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3667cfb3ff%3A0x3980814d68f46446!2sConnaught%20Lane%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1689787250309!5m2!1sen!2sin"
              style={{
                width: "550px",
                height: "450px",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
              title="googlemapLocation"
            ></iframe>
          </div>
        </div>
        <hr style={{ color: "whitesmoke" }} />
        <h2 style={{ color: "white" }}>Want to Book Table ?</h2>
        <p style={{ color: "white" }}>Enter the details below:</p>
        <div className="d-flex">
          <div className="m-5" style={{ marginRight: "300px",border : "solid"}}>
            <form onSubmit={handleSubmit}>
              <h4 style={{ color: "white" }}>Submit Details</h4>
              <div>
                <label style={{ margin: "20px" }}>
                  <span style={{ color: "white" }}>Name</span>
                  <input
                    type="text"
                    style={{ margin: "23px", width: "250px" }}
                    onChange={handleChange}
                    name="name"
                    value={details.name}
                  />
                </label>
              </div>
              <div className="">
                <label style={{ margin: "1px" }}>
                  <span style={{ color: "white" }}>Mobile</span>
                  <input
                    type="text"
                    style={{ margin: "20px", width: "250px" }}
                    onChange={handleChange}
                    name="phone"
                    value={details.phone}
                  />
                </label>
              </div>
              <button className="btn btn-light" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="" style={{ width: "100px" }}>
            <img
              src={bgimg7}
              alt="..."
              style={{ height: "500px", width: "550px" }}
            />
          </div>
        </div>
        <Footer color = "white"/>
      </div>
    </div>
  );
}

export default Contact;
