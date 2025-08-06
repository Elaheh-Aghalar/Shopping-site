import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import "./shop.css";

const Product = (props) => {
  const { id, productName, productImage, price, description } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const item = cartItems?.find((item) => item.id === id);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="product-card">
        <img
          src={productImage}
          className="product-image"
          alt={productName}
          style={{ cursor: "pointer" }}
          onClick={() => setShowDetails(true)}
        />
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
          <button className="btn-details" onClick={() => setShowDetails(true)}>
            مشاهده جزئیات
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDetails(false)}>×</button>
            <h3>{productName}</h3>
            <p className="modal-description">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;