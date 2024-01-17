import React from "react";
import { useContextCustom } from "../context/StateContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { products }
  } = useContextCustom();
  return (
    <div className="d-flex flex-wrap gap-3">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
