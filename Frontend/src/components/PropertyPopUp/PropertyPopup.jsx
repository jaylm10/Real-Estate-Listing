import React from "react";
import "./PropertyPopup.css";

const PropertyPopup = ({ property, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Close Button */}
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-image">
          <img src={`http://localhost:3000${property.image}`} alt="Property" />
        </div>

        <div className="popup-details">
          <div className="popup-info">
            <div className="left-content">

            <h2 className="property-price">${property.price}</h2>
            <p className="property-detail">
              <strong>Beds:</strong> {property.beds} | <strong>Baths:</strong> {property.baths} |{" "}
              <strong>Sqft:</strong> {property.sqft}
            </p>
            <p className="property-detail">
              <strong>Sale/Rent:</strong> {property.saleOrRent}
            </p>
            <p className="property-detail">
              <strong>Address:</strong> {property.street}, {property.city}, {property.state}{" "}
              {property.zip}
            </p>
            <p className="property-description">{property.description}</p>
            </div>

            <div className="owner-info">
            <h3>Owner Details</h3>
              <p>
                <strong>First Name:</strong> {property.firstName}
              </p>
              <p>
                <strong>Email:</strong> {property.email}
              </p>
              <p>
                <strong>Phone:</strong> {property.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPopup;
