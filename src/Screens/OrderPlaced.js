import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div>
      <Navbar />
      <div className="" style={{ height: "100%", backgroundColor: "white" }}>
        <div className="" style={{ height: "500px",color : "black"}}>
            < br/>
            < br/>
            < br/>
            <h1>Your Order is Placed successfully !!</h1>
            <h2>Order will reach in 20-30min at your table</h2>
            < br/>
            <h4>Thank you for Choosing Barbeque City</h4>
            < br/>
            < br/>
            <button className="btn btn-dark"><Link to = "/myorders" style={{textDecoration : "none",color : "white"}}>Continue</Link></button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OrderPlaced;
