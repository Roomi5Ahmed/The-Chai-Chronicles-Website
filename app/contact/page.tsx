"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To display submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Failed to send message: ${result.message || 'Unknown error'}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(`Error sending message: ${error.message}`);
      } else {
        setStatus('Error sending message: An unknown error occurred.');
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Get in Touch</h1>

        <div className="contact-content">
          {/* Contact Form Section */}
          <section className="contact-form-section">
            <h2 className="section-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
              {status && <p>{status}</p>}
            </form>
          </section>

          {/* Map and Info Section */}
          <section className="map-info-section">
            <h2 className="section-title">Our Location</h2>
            <div className="map-placeholder">
              [Map Placeholder]
            </div>
            <div className="contact-info">
              <p>Address: 123 Chai Street, Aroma City, India 56789</p>
              <p>Email: info@thechaichronicles.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </section>
        </div> {/* Close contact-content div */}

        {/* FAQs Section */}
        <section className="faqs-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faqs-list">
            {/* Placeholder FAQ Item */}
            <div className="faq-item">
              <h3>What makes The Chai Chronicles unique?</h3>
              <p>We focus on the rich cultural stories and nostalgic experiences tied to Indian chai, offering blends inspired by regional traditions and moments.</p>
            </div>
             <div className="faq-item">
              <h3>Are your teas ethically sourced?</h3>
              <p>Yes, we are committed to sourcing our tea leaves ethically and sustainably, working directly with growers who share our values.</p>
            </div>
             <div className="faq-item">
              <h3>Do you offer international shipping?</h3>
              <p>Currently, we primarily ship within India, but we are exploring options for international delivery in the future.</p>
            </div>
          </div>
        </section>

        {/* Add animated tea trail placeholder here later */}

      </div>
    </div>
  );
}
