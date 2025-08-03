import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import "./shop.css";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const item = cartItems?.find((item) => item.id === id);

  return (
    <div className="product-card">
      <img src={productImage} className="product-image" alt={productName} />
      <div className="product-info">
        <h5 className="product-title">{productName}</h5>
        <p className="product-price">${price}</p>
        <div className="product-controls">
          <button className="btn-action" onClick={() => addToCart(id)}>+</button>
          <span className="product-count">{item?.count || 0}</span>
          {item && item.count > 0 && (
            <button className="btn-action" onClick={() => removeFromCart(id)}>-</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;