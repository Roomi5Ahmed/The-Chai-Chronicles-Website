"use client";
import React from 'react';

export default function OurStoryPage() {
  React.useEffect(() => {
    const L = require('leaflet');
    const mapId = 'map'; // ID of the map container
    const mapElement = document.getElementById(mapId);

    // Check if the map container exists and is not already initialized
    if (mapElement && !(mapElement as any)._leaflet_id) {
      const map = L.map(mapId).setView([20.5937, 78.9629], 5);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([19.0760, 72.8777]).addTo(map)
        .bindPopup('Cutting Chai (Mumbai)').openPopup();

      L.marker([17.3850, 78.4867]).addTo(map)
        .bindPopup('Irani Chai (Hyderabad)').openPopup();

      L.marker([34.0837, 74.7973]).addTo(map)
        .bindPopup('Noon Chai (Kashmir)').openPopup();
    }
  }, []);

  return (
    <div className="our-story-page">
      <div className="container">
        <h1 className="page-title">Our Story</h1>

        {/* Brand Origin Section */}
        <section className="brand-origin-section">
          <h2 className="section-title">Our Humble Beginnings</h2>
          <p>The Chai Chronicles was born from a deep-seated love for the timeless ritual of Indian chai. Our journey began in a small family kitchen, where generations of brewing traditions were passed down. We envisioned a brand that not only offers authentic chai blends but also shares the rich stories, warmth, and nostalgia associated with every cup.</p>
          {/* Add imagery related to origin here */}
        </section>

        {/* Chai Timeline Section */}
        <section className="chai-timeline-section">
          <h2 className="section-title">A Timeline of Chai in India</h2>
          <p>Dive into the fascinating history of chai in India. From its ancient origins as a medicinal beverage in Ayurvedic traditions to its popularization during the colonial era and its evolution into the beloved street-side drink and household staple it is today, the story of chai is interwoven with the fabric of Indian history and culture.</p>
          {/* Placeholder for timeline elements (e.g., list, divs for visual timeline) */}
        </section>

        {/* Cultural Map Section */}
<section className="cultural-map-section">
          <div id="map" style={{ height: '400px' }}></div>
          <h2 className="section-title">Chai Across India: A Cultural Map</h2>
          <p>Chai is not just one drink; it's a diverse tapestry of flavors and traditions across India. Explore the robust and spicy 'Cutting Chai' of Mumbai, the rich and milky 'Irani Chai' of Hyderabad, the unique salty 'Noon Chai' from Kashmir, and many more regional treasures. Each cup tells a story of its origin and the people who cherish it.</p>
          {/* Placeholder for map or regional descriptions */}
        </section>

        {/* Add other sections as needed */}
      </div>
    </div>
  );
}
