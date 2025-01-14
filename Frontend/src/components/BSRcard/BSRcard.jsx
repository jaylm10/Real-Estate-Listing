import React from 'react';
import './BSRcard.css';

const BSRcard = ({ cards }) => {
  return (
    <div className="bsr-card-container">
      {cards.map((card, index) => (
        <div key={index} className="bsr-card">
          <div className="bsr-card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <h2 className="bsr-card-title">{card.title}</h2>
          <p className="bsr-card-description">{card.description}</p>
          <button className="bsr-card-button">{card.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default BSRcard;
