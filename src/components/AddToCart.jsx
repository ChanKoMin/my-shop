import React, { useEffect, useState } from "react";
import { useContextCustom } from "../context/StateContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const {
    state: { carts },
    dispatch
  } = useContextCustom();
  const [mainTotal, setMainTotal] = useState(0);
  useEffect(() => {
    setMainTotal(total);
  }, []);
  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };
  const total = () => carts?.reduce((pv, cv) => pv + cv.price, 0);
  return (
    <>
      {carts.length ? (
        <div>
          <div>
            {carts.map((cart) => (
              <Cart
                key={cart.id}
                item={cart}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
              />
            ))}
          </div>
          <div className="d-flex justify-content-between rounded shadow p-3">
            <h2>Total</h2>
            <p className=" fw-bold">${mainTotal.toFixed(2)}</p>
          </div>
          <div className="mt-4 text-end">
            <button
              onClick={() => dispatch({ type: "CLEAR_CART", payload: carts })}
              className="btn btn-danger"
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded w-50 h-100 shadow text-center mx-auto p-5">
          <p>Your Cart is Empty</p>
          <Link to={"/"}>
            <button className="btn btn-primary">Back To Shop</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default AddToCart;
