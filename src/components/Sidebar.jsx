import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ minWidth: '200px' }}>
      <h5 className="mb-4">پنل ادمین</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/products" className="nav-link">محصولات</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/orders" className="nav-link">سفارش‌ها</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">بازگشت به فروشگاه</Link>
        </li>
      </ul>
    </div>
  );
}