import React from "react";
import { useCart, useDispatchCart } from "../Components/ContextReducer";
import Navbar from "../Components/Navbar";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Cart = () => {
  //Cart code will be attached here
  const navigate = useNavigate();
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="fs-3 m-5">Your Cart is empty!!</div>
      </div>
    );
  }
  //Handle Checkout will be refected here.
  let totalMoney = data.reduce((total, curr) => total + curr.price, 0);
  const handleCheckout = async () => {
    navigate("/stripe-checkout");
    let userEmail = localStorage.getItem("userEmail");
    let res = await fetch("http://localhost:9000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
      }),
    });
    console.log("Order Response: ", res);
    if (res.status === 200) {
      dispatch({ type: "DROP" });
    }
  };
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <Navbar />
      <div
        className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md"
        style={{ overflow: "auto", maxHeight: "500px" }}
      >
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Size</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.Qnt}</td>
                    <td>{element.size}</td>
                    <td>Rs.{element.price}/-</td>
                    <td>
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <br />
      <div>
        <h1 className="fs-2">Total Price: Rs:{totalMoney}/-</h1>
      </div>
      <br />
      <div>
        <button
          type="button"
          className="btn btn-dark mx-5"
          style={{ color: "white" }}
          onClick={handleClick}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-dark"
          style={{ color: "white" }}
          onClick={handleCheckout}
        >
          Pay Now
        </button>
      </div>
      <Footer color="black" />
    </>
  );
};

export default Cart;
