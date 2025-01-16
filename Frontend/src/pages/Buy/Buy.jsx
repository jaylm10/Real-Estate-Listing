import React, { useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import BuyCard from "../../components/BuyCard/BuyCard";

const Buy = () => {
  const [properties, setProperties] = useState([]);
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

  return (
    <>
      <FilterBar onFilterApply={handleFilterApply} />
      <div>
        <h1>Properties for Sale</h1>
        <div className="property-list">
          {properties.length > 0 ? (
            properties.map((property) => (
              <BuyCard key={property._id} property={property} />
            ))
          ) : (
            <p>No properties found matching the criteria.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Buy;
