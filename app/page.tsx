"use client";
import { chaiMoments } from './chai-moments';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react'; // Import useEffect

interface TimelineItemProps {
  index: number;
  expandedItem: number | null;
  toggleItem: (index: number) => void;
  date: string;
  fullText: string;
  shortText: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  index,
  expandedItem,
  toggleItem,
  date,
  fullText,
  shortText,
}) => {
  return (
    <div className="timeline-item" onClick={() => toggleItem(index)}>
      <span className="timeline-date">{date}</span>
      <p>{expandedItem === index ? fullText : <>{shortText} <span className="arrow-icon">&#8595;</span></>}</p>
    </div>
  );
};


export default function Home() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false); // State to track if on client side

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts on client
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const timelineData = [
    {
      date: 'Late 19th Century',
      fullText: 'The British introduced tea to India, primarily for their own consumption and export. Initially, tea consumption was limited to the British and affluent Indians, marking the beginning of a new culinary chapter in the country.',
      shortText: 'The British introduced tea to India... ',
    },
    {
      date: 'Early 20th Century',
      fullText: 'Enterprising tea vendors began appearing on railway platforms, recognizing an opportunity to cater to the needs of travelers seeking refreshment during their journeys. These vendors played a crucial role in popularizing chai among the masses.',
      shortText: 'Tea vendors begin appearing on railway platforms... ',
    },
    {
      date: 'Mid-20th Century',
      fullText: 'Chai transformed into a ubiquitous and affordable beverage, readily available to all classes of railway travelers. Its accessibility and low cost made it an indispensable part of the Indian Railways experience, enjoyed by millions daily.',
      shortText: 'Chai becomes a ubiquitous beverage... ',
    },
    {
      date: '1950s-1980s',
      fullText: 'A significant shift occurred as tea stalls gradually gave way to vendors selling chai directly on trains, enhancing convenience for passengers. This era solidified chai\'s presence as an integral part of train travel, with vendors becoming iconic figures.',
      shortText: 'Shift from tea stalls to vendors selling chai on trains... ',
    },
    {
      date: 'Late 20th Century',
      fullText: 'The introduction of disposable cups (plastic/paper) alongside traditional kulhads marked a change in serving practices. While kulhads remained popular, disposable cups offered a more convenient and hygienic option for some travelers.',
      shortText: 'Introduction of disposable cups alongside traditional kulhads... ',
    },
    {
      date: '21st Century',
      fullText: 'The 21st century witnessed the emergence of branded tea and coffee vending machines on railway stations, offering passengers a wider variety of beverage options. Additionally, online tea ordering and delivery services catered to the evolving needs of train passengers.',
      shortText: 'Emergence of vending machines and online tea ordering... ',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div> {/* Semi-transparent overlay */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-tagline">A Journey Through India&#39;s Chai Rituals</h1>
          </div>
          <div className="hero-image-container">
            <img src="/kulhad.png" alt="Kulhad with Steam" className="kulhad-image" />
            {/* Steam animation element */}
            <div className="kulhad-steam"></div>
          </div>
        </div>
      </section>

      {/* Chai Moments Carousel Section (Placeholder) */}
      <section className="chai-moments-section">
        <div className="container">
          <h2 className="section-title">Chai Moments</h2>
          {isClient ? ( // Conditionally render Slider on client side
            <Slider {...settings}>
              {chaiMoments.map(moment => (
                <div key={moment.id} className="carousel-item">
                  <h3>{moment.title}</h3>
                <img src={moment.image} alt={moment.title} className="chai-moment-image" />
                <p>{moment.description}</p>
              </div>
            ))}
            </Slider>
          ) : (
            // Optional: Render a placeholder or null on the server
            <div style={{ height: '300px', backgroundColor: '#eee' }}>{/* Placeholder */}</div>
          )}
        </div>
      </section>


      {/* Indian Railway Journeys Section */}
      <section className="railway-journey-section">
        <div className="container">
          <h2 className="section-title">Chai on the Indian Railways: A Journey Through Time</h2>
          <p>
            From humble beginnings to an indispensable part of the Indian Railways experience, discover the captivating story of chai&#39;s evolution on the tracks.
          </p>
          {/* Placeholder for timeline element */}
          <div className="railway-timeline">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                index={index}
                expandedItem={expandedItem}
                toggleItem={toggleItem}
                date={item.date}
                fullText={item.fullText}
                shortText={item.shortText}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Add other sections as needed */}
    </div>
  );
}
