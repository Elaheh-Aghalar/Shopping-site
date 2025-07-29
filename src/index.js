// import { createContext } from "react";
// import {useCart} from "./hook/useCart";

// export const ShopContext = createContext({
//     cartItemes : null,
//     addToCart : ()=>{},
//     removeFromCart : ()=>{}
// });
// export const ShopContextProvider =(props)=>{
//     return<ShopContext.Provider value={useCart}>{props.children}</ShopContext.Provider>
// }


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

