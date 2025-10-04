import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useTranslation } from 'react-i18next'; 
import './nav.css';

const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const { t, i18n } = useTranslation(); 
  const itemCount = cartItems?.reduce((prev, current) => prev + current.count, 0);

  return (
    <nav className="navbar-modern">
      <div className="navbar-container">
        
        {}
        <div className="navbar-logo">
          <Link to="/" className="logo-text">🛍 OnlineShop</Link>
        </div>

        {}
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link-modern">{t('home')}</Link></li>
          <li><Link to="/products" className="nav-link-modern">{t('products')}</Link></li>
          <li><Link to="/categories" className="nav-link-modern">{t('categories')}</Link></li>
        </ul>

        {}
        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </Link>
        </div>

        {}
        <div style={{ marginLeft: '10px' }}>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('fa')}>FA</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;