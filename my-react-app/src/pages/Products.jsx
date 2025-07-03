import React from "react";
import MyComponent from "../components/myComponent";
import Counter from "../components/Counter";
import ColorPicker from "../components/ColorPicker";
import Food from "../components/Food";
import Car from "../components/Car";

const Products = () => {
  return (
    <div>
      <h1 className="container">Products</h1>
      <MyComponent />
      <Counter />
      <Food />
      <Car />
      <ColorPicker />
    </div>
  );
};

export default Products;
