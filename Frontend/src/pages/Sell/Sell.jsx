import React, { useState } from "react";
import "./Sell.css";
import { Link } from "react-router-dom";
import SellForm from "../sellform/SellForm";
import SellPage from "../../images/sell-agent.png";

const Sell = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); 

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
            <button className="open-form-button" onClick={openForm}>
              Sell Your Property
            </button>
          </div>
        </div>
      </div>

      {/* Render the SellForm component */}
      <SellForm isOpen={isFormOpen} onClose={closeForm} />

      {/* Add the new "Sell traditionally with an agent" section */}
      <div className="sell-agent-section">
        <h2>Sell traditionally with an agent</h2>
        <p>
          Not in a market with NextNest's new selling experience? Work with a
          real estate agent for <br/> selling support at every step, including
          prepping, listing, and marketing your home.
        </p>
        <button className="find-agent-button">Find an agent</button>
        <div className="learn-link-container">
          <Link to="/choose-agent" className="learn-link">
            Learn how to choose an agent
          </Link>
        </div>

        <div className="sell-agent-info">
          <div className="why-sell">
            <h3>Why sell traditionally</h3>
            <ul>
              <li>Potential for bidding wars</li>
              <li>Access to local market expertise</li>
              <li>Get help negotiating and reviewing offers</li>
              <li>Navigate a stressful process with a dedicated guide</li>
            </ul>
          </div>

          <div className="agent-image">
            <img src={SellPage} alt="Agent assisting with selling a home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
