import React from "react";
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";
import Marque from "../Components/Marque";
import bgimg6 from "../Assests/Image6.jpg";

function About() {
  return (
    <div>
      <Navbar2 />
      <div className="" style={{ height: "100%", backgroundColor: "black" }}>
        <Marque />
        <div>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={bgimg6}
                  class="d-block w-100"
                  alt="..."
                  style={{ height: "450px" }}
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          <div
            class="card"
            style={{
              margin: "50px",
              backgroundColor: "black",
              color: "white",
              border: "solid",
            }}
          >
            <div class="card-header">Quote</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  "The doctor of the future will no longer treat the human frame
                  with drugs, but rather will cure and prevent disease with
                  nutrition."
                </p>
                <footer class="blockquote-footer">
                  <cite title="Source Title" style={{ color: "white" }}>
                    Thomas Edison
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <hr style={{ color: "whitesmoke" }} />
        <h2 style={{ color: "white" }}>Our Story</h2>
        <div
          class="card"
          style={{
            margin: "50px",
            backgroundColor: "black",
            color: "white",
            border: "solid",
          }}
        >
          <div class="card-body">
            Once upon a time, in a bustling city, two lifelong friends, Amol had
            a passion for grilling and barbecue. Their love for sizzling flavors
            and the joy of bringing people together sparked an idea that would
            change their lives forever. One warm summer evening, sitting by a
            crackling bonfire, they hatched a plan to open a restaurant that
            would celebrate their culinary expertise. They envisioned a place
            where families and friends could enjoy mouthwatering barbecue
            delicacies in a vibrant and welcoming atmosphere. After months of
            relentless hard work and dedication, their dream became a reality.
            They secured a prime location in the heart of the city and
            christened it "Barbeque City." With a stylish rustic interior and an
            outdoor terrace adorned with twinkling lights, the restaurant exuded
            a charming and inviting ambiance. Alex and Mark meticulously curated
            a menu that featured an array of barbecued delights from various
            cultures, each dish crafted with love and the perfect blend of
            secret spices. From tender ribs glazed with honey to sizzling kebabs
            infused with exotic flavors, every item on the menu had a story to
            tell. Word about Barbeque City spread like wildfire. Soon, people
            from all corners of the city flocked to savor the delectable
            offerings. Laughter and chatter filled the air as the restaurant
            became a hub for celebrations, gatherings, and unforgettable
            memories. What truly set Barbeque City apart was the passion and
            warmth the owners poured into every aspect of the restaurant. Amol
            took the time to interact with their guests, listening to their
            feedback, and cherishing their compliments. It wasn't just a
            business for them; it was a way of life. As the sun set over
            Barbeque City, the aroma of succulent meats and smoky goodness
            wafted through the air, captivating the senses of all who passed by.
            The restaurant had become a landmark, a place where people created
            lasting bonds over plates of shared delights. And so, the tale of
            Barbeque City continues, a testament to the power of friendship,
            passion, and the love for good food. It stands tall as a beacon of
            culinary excellence, inviting all to experience the magic of
            flavorful barbecues and the joy of building cherished memories with
            loved ones.
          </div>
        </div>
        <Footer color = "white"/>
      </div>
    </div>
  );
}

export default About;
