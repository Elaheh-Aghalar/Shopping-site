import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from './context/shopContext';
import routes from './routes';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;