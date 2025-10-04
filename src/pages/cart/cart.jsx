import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";
import { useTranslation } from "react-i18next";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const { t } = useTranslation(); 
  const hasItems = cartItems?.some((item) => item.count > 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 {t('yourCart')}</h2>

      {hasItems ? (
        <div className="cart-items-grid">
          {PRODUCTS.map((p) =>
            cartItems?.some((i) => i.id === p.id && i.count > 0) ? (
              <Product key={p.id} data={p} />
            ) : null
          )}
        </div>
      ) : (
        <p className="empty-message">{t('cartEmpty')}</p>
      )}
    </div>
  );
};

export default Cart;