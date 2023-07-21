import React, { useState, useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import Marque from "../Components/Marque";
import NewCard from "../Components/NewCard";
import Footer from "../Components/Footer";

function Menu() {
  const [cat, setcat] = useState([]);
  const [item, setItem] = useState([]);

  const fetchData = async () => {
    let response = await fetch("http://localhost:9000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    //console.log(data[0],data[1]);
    setItem(data[0]);
    setcat(data[1]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar2 />
      <Marque />
      <div className="" style={{ height: "100%", backgroundColor: "black" }}>
        <h1 style={{color : "white"}}>What's in Menu</h1>
        <hr style={{ color: "whitesmoke" }} />
        <div className="container">
          {cat !== []
            ? cat.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3 " style={{color : "white"}}>
                      {data.CategoryName}
                    </div>
                    <hr />
                    {item !== [] ? (
                      item
                        .filter(
                          (element) =>
                            element.CategoryName === data.CategoryName
                        )
                        .map((filterItem) => {
                          return (
                            <div
                              key={filterItem._id}
                              className="col-12 col-md-7 col-lg-3"
                            >
                              <NewCard
                                foodItem={filterItem}
                                options={filterItem.options[0]}
                                imgsrc={filterItem.img}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div> No such Data found </div>
                    )}
                  </div>
                );
              })
            : "No Result Found"}
        </div>
        <Footer color = "white"/>
      </div>
    </div>
  );
}

export default Menu;
