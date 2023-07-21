import React from "react";

function Carousal() {
  return (
    <div className="">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        
      >
        <div class="carousel-inner" id = "carousal">
        <div class="carousel-caption d-none d-md-block" style={{zIndex : "10"}}>
              <form class="d-flex">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success mx-2 my-sm-0 text-white bg-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          <div class="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×700/?burger"
              class="d-block w-100"
              alt="..."
              style={{objectFit : "contain"}}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×700/?pastry"
              class="d-block w-100"
              alt="..."
              style={{objectFit : "contain"}}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×700/?barbeque"
              class="d-block w-100"
              alt="..."
              style={{objectFit : "contain"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
