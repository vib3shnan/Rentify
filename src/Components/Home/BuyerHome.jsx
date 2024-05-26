import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Form, Button } from 'react-bootstrap';
import './BuyerHome.css';

import Suggestion from '../Suggestions/Suggestions';
import BuyerHomeSuggestion1 from '../Images/BuyerSuggestions/BuyerHomeSuggestion-1.jpg'; // Adjust the path and extension as needed
import BuyerHomeSuggestion2 from '../Images/BuyerSuggestions/BuyerHomeSuggestion-2.jpg';
import BuyerHomeSuggestion3 from '../Images/BuyerSuggestions/BuyerHomeSuggestion-3.jpg';
const BuyerHome = () => {
  return (
    <div>
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="buyer-home-container">
        <Form className="search-form" role="search">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search-input"
            aria-label="Search"
          />
          <Button variant="outline-success" type="submit" className="search-button">Search</Button>
        </Form>
        <div className="suggestions-container">
          <Suggestion
            image={BuyerHomeSuggestion1}

            title="Card Title 1"
            text="A 3BHK-Fully Furnished Gated Community Located in West Mambalam."
          />
          <Suggestion
            image={BuyerHomeSuggestion2}
            title="Card Title 2"
            text="A 2BHK Semi-Furnished Apartment in Navalur"
          />
          <Suggestion
            image={BuyerHomeSuggestion3}
            title="Card Title 3"
            text="A 2BHK Standalone building located in perungudi"
          />
        </div>
      </div>
    </div>
  );
}

export default BuyerHome;
