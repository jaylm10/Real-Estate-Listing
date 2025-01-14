// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="top-section">
        <div className="top-content">
          <h2>Looking for a dream home?</h2>
          <p>We can help you realize your dream of a new home</p>
          <button className="explore-button">Explore Properties →</button>
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="logo-section">
            <div className="logo-icon"></div> {/* Placeholder for your logo icon */}
            <h3>Homeverse</h3>
            </div>
            <p>We not only help you find a house but also help you find a life.</p>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Camp Nou, Barcelona, Spain</p>
              <p><i className="fas fa-phone"></i> +91 8758838722</p>
              <p><i className="fas fa-envelope"></i> contact@homeverse.com</p>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Locations Map</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Order tracking</a></li>
              <li><a href="#">Wish List</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Promotional Offers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Wish List</a></li>
              <li><a href="#">Order tracking</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;