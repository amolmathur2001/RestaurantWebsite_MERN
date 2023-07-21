import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";
import bgimg3 from "../Assests/Image1.jpg";
import bgimg from "../Assests/Image2.jpg";
import bgimg1 from "../Assests/Image3.jpg";
import bgimg4 from "../Assests/Image4.jpg";
import bgimg5 from "../Assests/Image5.jpg";
import Marque from "../Components/Marque";
import "./MainHome.css";

const MainPage = () => {
  return (
    <div>
      <Navbar2 />
      <div className="" style={{ height: "100%", backgroundColor: "black" }}>
        <div
          className="mainHome"
          style={{ backgroundImage: `url(${bgimg3})`, height: "600px" }}
        >
          <Marque />
          <div className="container" style={{ marginTop: "130px" }}>
            <h2 style={{ color: "white" }}>
              Indulge Your Senses in Culinary Bliss:{" "}
            </h2>
            <h2 style={{ color: "white" }}>
              Experience a Symphony of Flavors at
            </h2>
            <h1
              style={{ fontWeight: "bold", fontSize: "60px", color: "black" }}
            >
              Barbeque <span style={{ color: "white" }}>City</span>
            </h1>
            <br />
            <button
              className="btn btn-light mx-3"
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Order Online
              </Link>
            </button>{" "}
            <span>
              <button
                className="btn btn-light mx-3"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Link
                  to="/contactus"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Book Table
                </Link>
              </button>
            </span>
          </div>
        </div>
        <br />
        <div>
          <h2 style={{ color: "white" }}>OUR DELICIOUS FOOD</h2>
          <hr style={{ color: "whitesmoke" }} />
        </div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div
            class="carousel-inner"
            style={{ height: "550px", padding: "30px" }}
          >
            <div class="carousel-item active">
              <img
                src={bgimg}
                class="d-block w-100"
                alt="..."
                style={{ objectFit: "contain" }}
              />
            </div>
            <div class="carousel-item">
              <img src={bgimg1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bgimg4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bgimg5} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <hr style={{ color: "whitesmoke" }} />
        <h2 style={{ color: "white" }}>OUR STORY</h2>
        <p style={{ color: "whitesmoke" }}>The story behind Barbeque City</p>
        <div
          class="card"
          style={{
            margin: "50px",
            marginLeft: "50px",
            backgroundColor: "black",
            color: "white",
            border: "solid",
          }}
        >
          <div class="card-header">Barbeque City</div>
          <div class="card-body">
            <h5 class="card-title">
              {" "}
              "provide a delightful dining experience that exceeds customer
              expectations through a combination of exceptional food, impeccable
              service, and a welcoming ambiance."
            </h5>
            <p class="card-text">
              In the heart of the city, Amol open "Barbeque City," a restaurant
              celebrating their passion for grilling. With a menu filled with
              flavorful delights and a warm, welcoming ambiance, the restaurant
              becomes a hub for cherished memories and newfound friendships,
              creating a culinary haven where flames ignite both friendship and
              flavor.
            </p>
            <Link to="/about" class="btn btn-light">
              Read More
            </Link>
          </div>
        </div>
        <hr style={{ color: "whitesmoke" }} />
        <h2 style={{ color: "white" }}>What Our Foodie's Say</h2>
        <p style={{ color: "whitesmoke" }}>customer Review</p>
        <div
          className="d-flex"
          style={{
            flexWrap: "wrap",
            margin: "70px",
            padding: "70px",
            paddingBottom: "2px",
            paddingTop: "2px",
          }}
        >
          <div class="card col-md-6" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Ramesh Jain</h5>
              <p class="card-text">
                "A feast for the senses! Barbeque City's diverse range of
                grilled dishes left us spellbound. The flavors were simply
                tantalizing, and the service was top-notch. We'll definitely be
                back for more!"
              </p>
            </div>
          </div>
          <div class="card col-md-6 mx-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Sona Garg</h5>
              <p class="card-text">
                "An evening to remember! The ambiance was warm and inviting,
                making us feel right at home. The variety of meats and marinades
                exceeded our expectations, and the staff went above and beyond
                to ensure a memorable dining experience."
              </p>
            </div>
          </div>
          <div class="card col-md-6 mx-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Rohit Sharma</h5>
              <p class="card-text">
                "Barbeque City is a food lover's paradise! The vegetarian
                options were surprisingly flavorful, and the live grilling
                station added an interactive touch to our dining. Kudos to the
                chefs for crafting such delectable dishes!"
              </p>
            </div>
          </div>
          <div class="card col-md-6 mt-4" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Virat Kohli</h5>
              <p class="card-text">
                "Our taste buds danced with joy! From the succulent kebabs to
                the perfectly smoked ribs, every bite was a revelation of
                flavors. We appreciated the attention to detail and the friendly
                staff who made our evening extra special."
              </p>
            </div>
          </div>
          <div class="card col-md-6 mt-4 mx-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Amol Mathur</h5>
              <p class="card-text">
                "A delightful gastronomic adventure! The variety of sauces and
                sides allowed us to customize our meals to perfection. The
                family-friendly atmosphere made it a fantastic dining spot for
                all ages. Highly recommended!"
              </p>
            </div>
          </div>
          <div class="card col-md-6 mt-4 mx-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Pat Cummins</h5>
              <p class="card-text">
                "A symphony of taste! Barbeque City's fusion of international
                flavors left us in awe. The ambiance was cozy and ideal for a
                romantic dinner. We were thoroughly impressed by the quality of
                ingredients and the dedication of the staff. We'll be back
                soon!"
              </p>
            </div>
          </div>
        </div>
        <hr style={{ color: "whitesmoke" }} />
        <div className="container">
          <h2 style={{ color: "white" }}>Opening Hours | Address</h2>
          <br />
          <div class="card" style={{ backgroundColor: "black" }}>
            <div class="card-body" style={{ color: "white" }}>
              <h4>Barbeque City</h4>
              <h4>Cannought Lane,Barakhamba</h4>
              <h4>New Delhi India,203804</h4>
              <h4>Contact: 0120-298398,8073874387</h4>
              <h4>barbequeCity@gmail.com</h4>
            </div>
          </div>
        </div>
        <Footer color = "white"/>
      </div>
    </div>
  );
};

export default MainPage;
