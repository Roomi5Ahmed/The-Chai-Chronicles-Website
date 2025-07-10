import React, { createContext, useState, useContext } from 'react';

// Define the Wishlist Context type
interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
}

// Create the Wishlist Context
const WishlistContext = createContext<WishlistContextType>({} as WishlistContextType);

// Wishlist Provider Component
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load wishlist from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') { // Check if running on client side
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save wishlist to localStorage whenever it changes
  React.useEffect(() => {
    if (typeof window !== 'undefined') { // Check if running on client side
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]); // Rerun when wishlist state changes

  // Function to add item to wishlist
  const addToWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist; // Don't add if already in wishlist
      } else {
        return [...prevWishlist, id];
      }
    });
  };

  // Function to remove item from wishlist
  const removeFromWishlist = (id: number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((itemId) => itemId !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
