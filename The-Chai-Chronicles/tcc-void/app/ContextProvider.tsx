import React from 'react';
import { CartProvider } from './CartContext';
import { WishlistProvider } from './WishlistContext';

interface Props {
  children: React.ReactNode;
}

export function ContextProvider({ children }: Props) {
  return (
    <CartProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </CartProvider>
  );
}