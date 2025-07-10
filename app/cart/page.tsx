"use client";
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useCart } from '../CartContext';
import Link from 'next/link';
import { products } from '../shop/product-data';

export default function CartPage() {
  const { cart } = useCart();
  const [isClient, setIsClient] = useState(false); // State to track if on client side

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts on client
  }, []);

  // Calculate subtotal
  // This calculation needs to be inside the component function
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  const shipping = 50; // Placeholder shipping cost
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>

        {/* Conditionally render cart content only after client mount */}
        {isClient ? (
          <div className="cart-content">
            <section className="cart-items-section">
              <h2 className="section-title">Items in your Cart</h2>
              <div className="cart-items-list">
                {/* Ensure cart data is available before mapping */}
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  if (!product) return null; // Skip if product not found
                  return (
                    <div key={item.id} className="cart-item">
                      <h3>{product.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{product.price * item.quantity}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <aside className="order-summary-section">
              <h2 className="section-title">Order Summary</h2>
              <div className="order-details">
                <p>Subtotal: <strong>₹{subtotal.toFixed(2)}</strong></p>
                <p>Shipping: <strong>₹{shipping.toFixed(2)}</strong></p>
                <p>Total: <strong>₹{total.toFixed(2)}</strong></p>
              </div>
              <Link href="/checkout" className="checkout-button">Proceed to Checkout</Link>
            </aside>
          </div>
        ) : (
          // Render a loading state or null on the server and during client loading
          <p>Loading cart...</p>
        )}
      </div>
    </div>
  );
}
