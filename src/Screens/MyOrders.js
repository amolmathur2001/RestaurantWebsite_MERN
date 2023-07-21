import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MyOrders() {
  let date = 0;
  const [orderData, setOrderData] = useState([]);
  const fetchOrder = async () => {
    const myEmail = localStorage.getItem("userEmail");
    let res = await fetch("http://localhost:9000/api/myorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: myEmail }),
    });
    //fetching the res json from the api
    let resData = await res.json();
    console.log(resData.orderData);
    setOrderData(resData.orderData);
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <h1>My Orders </h1>
      <br />
      <div className="container" style={{ maxHeight: "autofit",display : "flex",flexDirection : "row"}}>
        <div className="row" style={{flex : 1}}>
          {orderData.length !== 0 ? (
            orderData
              .slice(0)
              .reverse()
              .map((element) => {
                return (
                  <div>
                    {element.map((element1) => {
                      return (
                        <div className="row">
                          {element1.order_date ? (
                            <div className="m-auto mt-5" >
                              {(date = element1.order_date)} {element1.time}
                              <hr />
                            </div>
                          ) : (
                            <div className="m-2 col-12 col-md-7 col-lg-3">
                              <div className="">
                                <div
                                  className="card mt-3 .col-lg-10 mb-4"
                                  style={{
                                    width: "20rem",
                                    maxHeight: "400px",
                                    flex : 1
                
                                  }}
                                >
                                  <img
                                    src={element1.img}
                                    className="card-img-top"
                                    alt="..."
                                    style={{
                                      height: "120px",
                                      objectFit: "fill",
                                    }}
                                  />
                                  <div className="card-body ">
                                    <h5>{element1.name}</h5>
                                    <div
                                      className="container w-100 p-0"
                                      style={{ height: "100px" }}
                                    >
                                      <h6 className="m-1">
                                        Quantity: {element1.Qnt}
                                      </h6>
                                      <h6 className="m-1">
                                        Size : {element1.size}
                                      </h6>
                                      <span className="m-1">
                                        Ordered On: {date}
                                      </span>
                                      <br />
                                      <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                        Price : ₹{element1.price}/-
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })
          ) : (
            <div className="m-5" style={{ height: "400px" }}>
              <h2>No Previous Orders Found !!</h2>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
