import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((products) => (
          <div className="cartCard">
            <img src={products.image} alt="" />
            <h5>{products.title}</h5>
            <h5>{products.price}</h5>
            <button className="btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
