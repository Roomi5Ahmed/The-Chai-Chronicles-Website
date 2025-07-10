"use client";
"use client";
import Link from 'next/link';
import React from 'react';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';
import { products } from './product-data';

export default function ShopPage() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = (id: number) => {
    addToCart(id);
  };

  const handleAddToWishlist = (id: number) => {
    addToWishlist(id);
  };

  // Placeholder data for filters and products
  const moodFilters = ['Relaxing', 'Energizing', 'Comforting'];
  const regionFilters = ['Assam', 'Darjeeling', 'Kerala', 'Mumbai'];
  const tasteFilters = ['Spicy', 'Sweet', 'Strong', 'Mild'];

  return (
    <div className="shop-page">
      <div className="container">
        <h1 className="page-title">Our Collection</h1>

        <div className="shop-content">
          {/* Category Filters Section */}
          <aside className="filter-section">
            <h2 className="section-title">Filter by</h2>
            <div className="filter-options">
              <h3>Mood</h3>
              <ul>
                {moodFilters.map(filter => <li key={filter}>{filter}</li>)}
              </ul>
              <h3>Region</h3>
              <ul>
                {regionFilters.map(filter => <li key={filter}>{filter}</li>)}
              </ul>
              <h3>Taste</h3>
              <ul>
                {tasteFilters.map(filter => <li key={filter}>{filter}</li>)}
              </ul>
            </div>
          </aside>

          {/* Product Listing Grid Section */}
          <main className="product-listing-section">
            <h2 className="section-title">Products</h2>
            <div className="product-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <Link href={`/shop/${product.id}`}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                    <h3>{product.name}</h3>
                  </Link>
                  <p>{product.description}</p>
                  <span>₹{product.price}</span>
                  <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                  <button onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}