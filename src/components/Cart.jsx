import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useContextCustom } from "../context/StateContext";

const Cart = ({ item, increaseTotal, decreaseTotal }) => {
  const [count, setCount] = useState(1);
  const { dispatch } = useContextCustom();
  const increaseHandler = () => {
    setCount((count) => count + 1);
    increaseTotal(item.price);
  };
  const decreaseHandler = () => {
    if (count > 1) {
      setCount((count) => count - 1);
      decreaseTotal(item.price);
    }
  };
  const oneItemPrice = item.price * count;
  const removeHandler = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decreaseTotal(oneItemPrice);
  };
  return (
    <div className="d-flex justify-content-between align-items-center my-4 p-3 shadow rounded-2">
      <div className="d-flex gap-4">
        <img
          src={item.image}
          width="150px"
          height="150px"
          className=" img-thumbnail"
          alt=""
        />
        <div className="">
          <h4 className="text-secondary lh-1">{item.title}</h4>
          <span className="badge text-bg-success my-3">{item.category}</span>
          <p className=" fw-bold">Price : ${oneItemPrice.toFixed(2)}</p>

          <button onClick={removeHandler} className="btn btn-danger">
            <MdOutlineRemoveCircle className="fs-4 me-2" />
            Remove
          </button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center me-5">
        <button onClick={increaseHandler} className="border-none">
          <MdOutlineKeyboardArrowUp className=" fs-4" />
        </button>
        <span className=" fw-bold">{count}</span>
        <button onClick={decreaseHandler} className="border-none">
          <MdOutlineKeyboardArrowDown className=" fs-4" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
