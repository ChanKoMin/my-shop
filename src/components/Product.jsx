import React from "react";
import { useContextCustom } from "../context/StateContext";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, description, image, category, price } = props;
  const { dispatch } = useContextCustom();
  return (
    <div className="card p-4" style={{ width: "310px" }}>
      <img
        src={image}
        className="card-img-top"
        height="250px"
        alt="product_img"
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-truncate">{description}</p>
        <div className="d-flex justify-content-between">
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
