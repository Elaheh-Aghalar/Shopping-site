// src/context/shopContext.js
import { createContext } from "react";
import { useCart } from "../hook/useCart";

// تعریف اولیه‌ی context با مقدار پیش‌فرض
export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// کامپوننت provider که context رو در کل برنامه منتشر می‌کنه
export const ShopContextProvider = ({ children }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};