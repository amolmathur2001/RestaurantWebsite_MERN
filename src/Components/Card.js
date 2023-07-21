import React, { useEffect, useState, useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let option = props.options;
  let price = useRef();

  let priceOptions = Object.keys(option);
  const [Qnt, setQnt] = useState(1);
  const [size, setSize] = useState("");
  let totalPrice = Qnt * parseInt(option[size]);
  const handleCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        console.log("Hello inside food array");
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: totalPrice,
          Qnt: Qnt,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: totalPrice,
          Qnt: Qnt,
          size: size,
          img: props.imgsrc,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: totalPrice,
      Qnt: Qnt,
      size: size,
      img: props.imgsrc,
    });
  };
  useEffect(() => {
    setSize(price.current.value);
  }, []);

  return (
    <div>
      <div
        className="card .col-lg-10 mb-4"
        style={{ width: "16rem", maxHeight: "autofit"}}
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
          <div className="container w-100">
            <select
              className="m-3 h-100  rounded"
              onChange={(e) => setQnt(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 mt-3"
              onChange={(e) => setSize(e.target.value)}
              ref={price}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Price : ₹{totalPrice}/-</div>
            <hr />
            <button className="btn btn-dark mx-1" onClick={handleCart}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
