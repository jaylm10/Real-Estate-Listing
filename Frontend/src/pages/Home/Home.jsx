import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CardImg1 from '../../images/home.jpg';
import CardImg2 from '../../images/La-house.webp';
import CardImg3 from '../../images/newyork.webp';
import CardImg4 from '../../images/san.webp';
import SellIcon from '../../images/sell-icon.png';
import RentIcon from '../../images/rent-icon.png';
import HomeCard from '../../components/HomeCard/HomeCard';
import BSRcard from '../../components/BSRcard/BSRcard'; // Import the BSRcard component

const Home = () => {
  const houses = [
    {
      image: CardImg1,
      price: '55555',
      bedrooms: 6,
      bathrooms: 10,
      sqft: '13000',
      address: '1589, N Avley, Los Angeles',
      status: 'Active',
    },
    {
      image: CardImg2,
      price: '67500',
      bedrooms: 4,
      bathrooms: 8,
      sqft: '11000',
      address: '6789, W Sunset, San Francisco',
      status: 'Active',
    },
    {
      image: CardImg3,
      price: '85000',
      bedrooms: 5,
      bathrooms: 7,
      sqft: '12000',
      address: '4560, S Maple, New York',
      status: 'Active',
    },
    {
      image: CardImg4,
      price: '92000',
      bedrooms: 3,
      bathrooms: 5,
      sqft: '10000',
      address: '1234, W Broadway, Chicago',
      status: 'Active',
    },
    {
      image: CardImg2,
      price: '78000',
      bedrooms: 4,
      bathrooms: 6,
      sqft: '11000',
      address: '4321, E Elm, Dallas',
      status: 'Active',
    },
    {
      image: CardImg3,
      price: '67000',
      bedrooms: 2,
      bathrooms: 3,
      sqft: '9000',
      address: '5678, S Pine, Houston',
      status: 'Active',
    },
  ];

  const bsrCards = [
    {
      image: CardImg1,
      title: 'Buy a home',
      description:
        'Find your place with an immersive photo experience and the most listings.',
      buttonText: 'Browse homes',
    },
    {
      image: SellIcon,
      title: 'Sell a home',
      description:
        'No matter what path you take to sell your home, we can help you navigate.',
      buttonText: 'See your options',
    },
    {
      image: RentIcon,
      title: 'Rent a home',
      description:
        'We’re creating a seamless online experience—from shopping to applying.',
      buttonText: 'Find rentals',
    },
  ];

  return (
    <>
      <div className="home">
        <div className="background-image">
          {/* Background image will be added via CSS */}
        </div>
        <div className="content">
          <h1>
            Agents. Tours. <br /> Loans. Homes.
          </h1>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="search-bar"
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>


      <div>
        <h1>Featured Listings</h1>
        <div className="featured-listings">
          <HomeCard cards={houses} />
        </div>
      </div>

      {/* Add BSRcard Section */}
      <div className="bsr-section">
        <h1>Explore Services</h1>
        <BSRcard cards={bsrCards} />
      </div>

    </>
  );
};

export default Home;
