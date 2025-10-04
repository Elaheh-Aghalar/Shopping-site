import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import { useTranslation } from "react-i18next";
import "./shop.css";

const Product = (props) => {
  const { id, productName, productImage, price, description } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const { t } = useTranslation(); 

  const item = cartItems?.find((item) => item.id === id);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="product-card">
        <img
          src={productImage}
          className="product-image"
          alt={t(productName)}
          style={{ cursor: "pointer" }}
          onClick={() => setShowDetails(true)}
        />
        <div className="product-info">
          <h5 className="product-title">{t(productName)}</h5> {}
          <p className="product-price">${price}</p>

          <div className="product-controls">
            <button className="btn-action" onClick={() => addToCart(id)}>+</button>
            <span className="product-count">{item?.count || 0}</span>
            {item && item.count > 0 && (
              <button className="btn-action" onClick={() => removeFromCart(id)}>-</button>
            )}
          </div>

          <button className="btn-details" onClick={() => setShowDetails(true)}>
            {t('viewDetails')} {}
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDetails(false)}>×</button>
            <h3>{t(productName)}</h3> {}
            <p className="modal-description">{t(description)}</p> {}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;