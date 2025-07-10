"use client";
import React from 'react';
import { products } from '../product-data';
import { useParams } from 'next/navigation';
import { useCart } from '../../CartContext';
import { useWishlist } from '../../WishlistContext';


export default function ProductPage() {
  const params = useParams();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const productId = parseInt(idParam || '');

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="container"><h1>Product not found</h1></div>;
  }

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product.id);
  };

  return (
    <div className="product-page">
      <div className="container">
        <h1 className="page-title">{product.name}</h1>
        <img src={product.image} alt={product.name} className="product-image" />
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ₹{product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
}