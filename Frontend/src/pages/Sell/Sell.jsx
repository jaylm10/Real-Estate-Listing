import React, { useState } from 'react';
import './Sell.css';
import { Link } from 'react-router-dom';
import SellForm from '../sellform/SellForm'; // Importing the SellForm component

const Sell = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage popup visibility

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="sell-container">
        <div className="sell-background">
          <div className="text-overlay">
            <h1 className="title">Sell your home with confidence</h1>
            <p className="subtitle">
              NextNest is making it simpler to sell your home and move forward.
            </p>
            {/* Button to open the SellForm */}
            <button className="open-form-button" onClick={openForm}>
              Sell Your Property
            </button>
          </div>
        </div>
      </div>

      {/* Render the SellForm component */}
      <SellForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Sell;
