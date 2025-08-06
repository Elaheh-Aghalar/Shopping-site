import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const hasItems = cartItems?.some((item) => item.count > 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {hasItems ? (
        <div className="cart-items-grid">
          {PRODUCTS.map((p) =>
            cartItems?.some((i) => i.id === p.id && i.count > 0) ? (
              <Product key={p.id} data={p} />
            ) : null
          )}
        </div>
      ) : (
        <p className="empty-message">Your cart is empty </p>
      )}
    </div>
  );
};

export default Cart;