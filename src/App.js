import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import { ShopContextProvider } from './context/shopContext';
import Sidebar from './components/Sidebar';
import ProductList from './pages/admin/ProductList';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Routes>
            {/* مسیرهای فروشگاه */}
            <Route path="/" element={<><Nav /><Shop /></>} />
            <Route path="/cart" element={<><Nav /><Cart /></>} />

            {/* مسیرهای ادمین */}
            <Route path="/admin/products" element={
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                  <ProductList />
                </div>
              </div>
            } />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;