import React from "react";
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContextCustom } from "../context/StateContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { carts }
  } = useContextCustom();
  console.log(carts);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const length = carts.length;
  const className =
    length > 0
      ? "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      : "d-none";
  return (
    <nav className="navbar bg-body-tertiary my-4">
      <div className="container-fluid">
        <Link to={"/"}>
          <FaShopify className=" fs-1" />
        </Link>
        <div className="d-flex">
          <form className="d-flex" onSubmit={submitHandler} role="search">
            <input
              className="form-control me-2"
              type="input"
              value={search}
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <Link to={"/addtocart"}>
            <button
              type="button"
              className="btn btn-primary position-relative ms-2"
            >
              <FaShoppingCart />
              <p className={className}>{length}</p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
