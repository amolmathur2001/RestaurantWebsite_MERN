import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";


const Home = () => {
  const [search, setSearch] = useState("");
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
      <Navbar />
      <div className="" >
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner" id="carousal">
            <div
              class="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <div class="d-flex justify-content-center">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                />
          
              </div>
            </div>
            <div class="carousel-item active">
              <img
                src="https://source.unsplash.com/random/300×700/?burger"
                class="d-block w-100"
                alt="..."
                style={{ objectFit: "contain" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/random/300×700/?pastry"
                class="d-block w-100"
                alt="..."
                style={{ objectFit: "contain" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/random/300×700/?barbeque"
                class="d-block w-100"
                alt="..."
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {cat !== []
          ? cat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3 ">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {item !== [] ? (
                    item
                      .filter(
                        (element) => element.CategoryName === data.CategoryName && (element.name.toLowerCase().includes(search.toLowerCase()))
                      )
                      .map((filterItem) => {
                        return (
                          <div
                            key={filterItem._id}
                            className="col-12 col-md-7 col-lg-3"
                          >
                            <Card
                              foodItem = {filterItem}
                              options={filterItem.options[0]}
                              imgsrc = {filterItem.img}
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
      <Footer color = "black"/>
    </div>
  );
};

export default Home;
