import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import "./Header.css";
import logo from "../../images/Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is signed in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsSignedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove JWT
    setIsSignedIn(false);
    navigate("/"); // Redirect to homepage or sign-in page
  };

  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Buy</li>
          <li>Rent</li>
          <li><Link to="/sell">Sell</Link></li>
          <li>Find an Agent</li>
          <li>Home Loans</li>
          {!isSignedIn ? (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          ) : (
            <li className="dropdown">
              <button className="dropdown-btn">
                <FontAwesomeIcon icon={faUser} />
              </button>
              <div className="dropdown-menu">
                <Link to="/profile">Profile</Link>
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
