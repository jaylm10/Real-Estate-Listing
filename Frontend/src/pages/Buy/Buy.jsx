import React, { useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import BuyCard from "../../components/BuyCard/BuyCard";
import PropertyPopup from "../../components/PropertyPopUp/PropertyPopup";

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null); // State for pop-up

  useEffect(() => {
    fetchProperties(); 
  }, []);

  const fetchProperties = (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();

    fetch(`http://localhost:3000/api/properties?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Properties:", data);
        setProperties(data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  };

  const handleFilterApply = (filters) => {
    fetchProperties(filters);
  };

  const handleCardClick = (property) => {
    setSelectedProperty(property); // Set the selected property for the pop-up
  };

  const handleClosePopup = () => {
    setSelectedProperty(null); // Close the pop-up
  };

  return (
    <>
      <FilterBar onFilterApply={handleFilterApply} />
      <div>
        <h1>Properties for Sale</h1>
        <div className="property-list">
          {properties.length > 0 ? (
            properties.map((property) => (
              <BuyCard
                key={property._id}
                property={property}
                onClick={() => handleCardClick(property)} 
              />
            ))
          ) : (
            <p>No properties found matching the criteria.</p>
          )}
        </div>
      </div>

      
      {selectedProperty && (
        <PropertyPopup property={selectedProperty} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Buy;
