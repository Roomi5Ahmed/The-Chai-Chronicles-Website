"use client";
import React, { createContext, useState, useContext } from 'react';

// Define the Cart Item interface
export interface CartItem {
  id: number;
  quantity: number;
}

// Define the Cart Context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

// Create the Cart Context
const CartContext = createContext<CartContextType>({} as CartContextType);

// Cart Provider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') { // Check if running on client side
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save cart to localStorage whenever it changes
  React.useEffect(() => {
    if (typeof window !== 'undefined') { // Check if running on client side
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]); // Rerun when cart state changes

  // Function to add item to cart
  const addToCart = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };

  // Function to remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to update item quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
