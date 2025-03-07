import React, { useState } from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilterApply }) => {
  const [location, setLocation] = useState("");
  const [saleOrRent, setSaleOrRent] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  const handleSaveSearch = (e) => {
    e.preventDefault(); 

    const filters = {
      location,
      saleOrRent,
      minPrice,
      maxPrice,
      beds,
      baths,
    };

  
    if (onFilterApply) {
      onFilterApply(filters);
    }
  };

  return (
    <form className="filter-bar" onSubmit={handleSaveSearch}>
      
      <input
        type="text"
        placeholder="Enter Location"
        className="filter-input location-input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

    
      <select
        className="filter-dropdown"
        value={saleOrRent}
        onChange={(e) => setSaleOrRent(e.target.value)}
      >
        <option value="">Select</option>
        <option value="sale">For Sale</option>
        <option value="rent">For Rent</option>
        <option value="sold">Sold</option>
      </select>


      <div className="filter-price">
        <input
          type="text"
          placeholder="Min Price"
          className="price-input"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Max Price"
          className="price-input"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      
      <select
        className="filter-dropdown"
        value={beds}
        onChange={(e) => setBeds(e.target.value)}
      >
        <option value="">Beds</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5+">5+</option>
      </select>

      
      <select
        className="filter-dropdown"
        value={baths}
        onChange={(e) => setBaths(e.target.value)}
      >
        <option value="">Baths</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5+">5+</option>
      </select>

     
      <button type="submit" className="save-button">
        Save Search
      </button>
    </form>
  );
};

export default FilterBar;
