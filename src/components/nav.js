import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import './nav.css';

const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const itemCount = cartItems?.reduce((prev, current) => prev + current.count, 0);

  return (
    <nav className="navbar-modern">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-text">🛍️ OnlineShop</Link>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link-modern">Home</Link></li>
          <li><Link to="/products" className="nav-link-modern">Products</Link></li>
          <li><Link to="/categories" className="nav-link-modern">Categories</Link></li>
        </ul>

        {/* Cart */}
        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;