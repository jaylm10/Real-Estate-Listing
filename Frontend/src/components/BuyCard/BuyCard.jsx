import React from "react";
import "./BuyCard.css";

const BuyCard = ({ property, onClick }) => {
  return (
    <div className="buy-card-container" onClick={onClick}>
      <div className="buy-card">
        <div className="buy-card-image">
          <img src={`http://localhost:3000${property.image}`} alt="House" />
        </div>
        <div className="buy-card-info">
          <h2 className="buy-card-price">${property.price}</h2>
          <p className="buy-card-details">
            {property.beds} bds | {property.baths} ba | {property.sqft} sqft |{" "}
            {property.saleOrRent}
          </p>
          <p className="buy-card-address">
            {property.street}, {property.city}, {property.state} {property.zip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
