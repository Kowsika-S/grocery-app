import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const found = prev.find(p => p._id === item._id);
      if (found) return prev.map(p => p._id === item._id ? { ...p, qty: (p.qty || 1) + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increase = (id) => {
    setCart(prev => prev.map(p => p._id === id ? { ...p, qty: p.qty + 1 } : p));
  };

  const decrease = (id) => {
    setCart(prev => prev.map(p => p._id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p));
  };

  const removeItem = (id) => setCart(prev => prev.filter(p => p._id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
