import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (!item) {
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      )
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};