import React from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
