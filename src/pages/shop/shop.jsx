import Product from "./product";
import { PRODUCTS } from "../../data/products";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-title">Our Products</h2>
      <div className="products-grid">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </div>
  );
};

export default Shop;