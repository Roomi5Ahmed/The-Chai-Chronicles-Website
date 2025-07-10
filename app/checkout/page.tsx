"use client";
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { products } from '../shop/product-data';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  const shipping = 50; // Placeholder shipping cost
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would integrate with a payment gateway here
    alert(`Order submitted!\n      Name: ${shippingInfo.name}\n      Address: ${shippingInfo.address}\n      Email: ${shippingInfo.email}\n      Phone: ${shippingInfo.phone}\n      Total: ₹${total.toFixed(2)}`);

    clearCart();
    setShippingInfo({
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>

        <div className="checkout-content">
          <form className="shipping-form" onSubmit={handleSubmit}>
            <h2 className="section-title">Shipping Information</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={shippingInfo.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="checkout-button">Submit Order</button>
          </form>

          <aside className="order-summary-section">
            <h2 className="section-title">Order Summary</h2>
            <div className="order-details">
              <p>Subtotal: <strong>₹{subtotal.toFixed(2)}</strong></p>
              <p>Shipping: <strong>₹{shipping.toFixed(2)}</strong></p>
              <p>Total: <strong>₹{total.toFixed(2)}</strong></p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}