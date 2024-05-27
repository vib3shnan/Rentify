import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const [showSellerHome, setShowSellerHome] = useState(true);
  const navigate = useNavigate();

  const toggleComponent = () => {
    setShowSellerHome(!showSellerHome);
    navigate(showSellerHome ? '/sell' : '/buy');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> RENTIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/buy">About</Nav.Link>
            <Nav.Link as={Link} to="/buy">Buy</Nav.Link>  
            <Nav.Link as={Link} to="/sell">Sell</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" onClick={toggleComponent}>
              {showSellerHome ? 'Sell' : 'Buy'}
            </Button>
          </Nav>
          <Navbar.Text className="justify-content-end">
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
