import React from "react";

function NewCard(props) {
  return (
    <div>
      <div>
        <div
          className="card .col-lg-10 mb-4"
          style={{ width: "16rem", maxHeight: "autofit" }}
        >
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">{props.foodItem.description}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
