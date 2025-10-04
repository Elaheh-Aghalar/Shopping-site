import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import Sidebar from './components/Sidebar';
import ProductList from './pages/admin/ProductList';

const routes = [
  {
    path: '/',
    element: (
      <>
        <Nav />
        <Shop />
      </>
    ),
    type: 'shop'
  },
  {
    path: '/cart',
    element: (
      <>
        <Nav />
        <Cart />
      </>
    ),
    type: 'shop'
  },

  {
    path: '/admin/products',
    element: (
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <ProductList />
        </div>
      </div>
    ),
    type: 'admin'
  },
];

export default routes;