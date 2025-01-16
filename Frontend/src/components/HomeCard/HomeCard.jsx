import React, { useState, useEffect } from 'react';
import './HomeCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HomeCard = ({ cards = [] }) => { // Default value to empty array if cards are not provided
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4); // Default to 4 for larger screens

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setCardsPerPage(4); // Laptop or larger screens
      } else if (screenWidth >= 768) {
        setCardsPerPage(2); // Tablet screens
      } else {
        setCardsPerPage(1); // Mobile screens
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener('resize', handleResize); // Set up resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1); // Increase index by 1
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Decrease index by 1
    }
  };

  if (!Array.isArray(cards) || cards.length === 0) {
    return <div>No properties available.</div>; // Display a message if no cards are available
  }

  return (
    <div className="carousel-container">
      <div className="carousel-buttons">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="carousel-button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= cards.length}
          className="carousel-button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="carousel">
        {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={card.image} alt="House" />
            </div>
            <div className="card-info">
              <h2 className="card-price">${card.price}</h2>
              <p className="card-details">
                {card.bedrooms} bds | {card.bathrooms} ba | {card.sqft} sqft | {card.status}
              </p>
              <p className="card-address">{card.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
