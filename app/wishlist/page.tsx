"use client";
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useWishlist } from '../WishlistContext';
import { products } from '../shop/product-data';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [isClient, setIsClient] = useState(false); // State to track if on client side

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts on client
  }, []);

  const handleRemoveFromWishlist = (id: number) => {
    removeFromWishlist(id);
  };

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1 className="page-title">My Wishlist</h1>

        {/* Conditionally render wishlist content only after client mount */}
        {isClient ? (
          <div className="wishlist-content">
            {wishlist.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              <div className="wishlist-grid">
                {products
                  .filter((product) => wishlist.includes(product.id))
                  .map((product) => (
                    <div key={product.id} className="cart-item">
                        <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
                        <h3>{product.name}</h3>
                      <p>Price: ₹{product.price}</p>
                      <button onClick={() => handleRemoveFromWishlist(product.id)}>Remove from Wishlist</button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : (
          // Render a loading state or null on the server and during client loading
          <p>Loading wishlist...</p>
        )}
      </div>
    </div>
  );
}