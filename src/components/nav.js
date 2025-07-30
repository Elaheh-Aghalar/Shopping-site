import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import './nav.css';

const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count}, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container d-flex justify-content-between align-items-center w-100">
        
        {/* Left - Logo */}
        <div className="navbar-brand">Online Shop</div>

        {/* Center - Links */}
        <ul className="navbar-nav flex-row gap-4 middle-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link">Categories</Link>
          </li>
        </ul>

        {/* Right - Cart */}
        <div className="d-flex align-items-center">
          <Link to="/cart" className="nav-link position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {itemCount > 0 && (
              <span className="cart-items-count badge bg-danger position-absolute top-0 start-100 translate-middle">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;