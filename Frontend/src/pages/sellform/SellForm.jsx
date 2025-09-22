import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SellForm.css";

const SellForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [firstName, SetFirstName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [street, SetStreet] = useState("");
  const [city, SetCity] = useState("");
  const [state, SetState] = useState("");
  const [zip, SetZip] = useState("");
  const [price, SetPrice] = useState("");
  const [sqft, SetSqft] = useState("");
  const [bed, SetBed] = useState("");
  const [bath, SetBath] = useState("");
  const [salerent, SetSalerent] = useState("");
  const [img, Setimg] = useState(null);
  const [description, SetDescription] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData to handle the file upload
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zip", zip);
    formData.append("saleOrRent", salerent);
    formData.append("price", price);
    formData.append("beds", bed);
    formData.append("baths", bath);
    formData.append("sqft", sqft);
    formData.append("description", description);
    if (img) {
      formData.append("image", img); // Add the image file
    }
  
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/properties`, {
        method: "POST",
        body: formData, // Use FormData for file uploads
      });
  
      if (response.ok) {
        const data = await response.json();
        alert("Property listed successfully!");
        navigate("/")
      } else {
        alert("Failed to list property.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while listing the property.");
    }
  };
  

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h2>Sell Your Property</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="FirstName"
                  required
                  value={firstName}
                  onChange={(e) => SetFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => SetEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  required
                  onChange={(e) => SetPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Street"
                  value={street}
                  required
                  onChange={(e) => SetStreet(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  required
                  onChange={(e) => SetCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  required
                  onChange={(e) => SetState(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zip}
                  required
                  onChange={(e) => SetZip(e.target.value)}
                />
              </div>

              <div className="form-row">
                <select
                  value={salerent}
                  onChange={(e) => SetSalerent(e.target.value)}
                  required
                >
                  <option value="">Sale/Rent</option>
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
                <input
                  type="text"
                  placeholder="Price"
                  required
                  value={price}
                  onChange={(e) => SetPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Square Footage"
                  required
                  value={sqft}
                  onChange={(e) => SetSqft(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Beds"
                  required
                  value={bed}
                  onChange={(e) => SetBed(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Baths"
                  required
                  value={bath}
                  onChange={(e) => SetBath(e.target.value)}
                />
              </div>

              <textarea
                placeholder="Description"
                value={description}
                required
                onChange={(e) => SetDescription(e.target.value)} 
              ></textarea>

              <div className="form-row">
                <input
                  type="file"
                  id="upload-photo"
                  onChange={(e) => Setimg(e.target.files[0])}
                />
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
