import React from "react";
import "./SellForm.css";

const SellForm = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h2>Sell Your Property</h2>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Street" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip Code" />
              </div>

              <div className="form-row">
                <select>
                  <option value="">Sale/Rent</option>
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
                <input type="text" placeholder="Price Range" />
                <input type="text" placeholder="Square Footage" />
                <input type="text" placeholder="Beds/Baths" />
              </div>

              <textarea placeholder="Description"></textarea>

              <div className="form-row">
                <input type="file" id="upload-photo" />
                <label htmlFor="upload-photo" className="upload-label">
                  Upload Photo
                </label>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SellForm;
