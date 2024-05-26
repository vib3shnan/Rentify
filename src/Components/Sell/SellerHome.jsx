import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SellerHome = () => {
  const [amenities, setAmenities] = useState({
    hospitals: false,
    schools: false,
    colleges: false,
    busStand: false
  });

  const handleAmenitiesChange = (event) => {
    const { name, checked } = event.target;
    setAmenities(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <Container className="mt-5">
      <h1>Seller Form</h1>
      <Form>
        <Form.Group controlId="formPlace" className="mb-3">
          <Form.Label>Place</Form.Label>
          <Form.Control type="text" placeholder="Enter place" />
        </Form.Group>

        <Form.Group controlId="formArea" className="mb-3">
          <Form.Label>Area (in sq ft)</Form.Label>
          <Form.Control type="number" placeholder="Enter area" />
        </Form.Group>

        <Form.Group controlId="formBedrooms" className="mb-3">
          <Form.Label>Number of Bedrooms</Form.Label>
          <Form.Control type="number" placeholder="Enter number of bedrooms" />
        </Form.Group>

        <Form.Group controlId="formAmenities" className="mb-3">
          <Form.Label>Amenities</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="Hospitals"
              name="hospitals"
              checked={amenities.hospitals}
              onChange={handleAmenitiesChange}
            />
            <Form.Check
              type="checkbox"
              label="Schools"
              name="schools"
              checked={amenities.schools}
              onChange={handleAmenitiesChange}
            />
            <Form.Check
              type="checkbox"
              label="Colleges"
              name="colleges"
              checked={amenities.colleges}
              onChange={handleAmenitiesChange}
            />
            <Form.Check
              type="checkbox"
              label="Bus Stand"
              name="busStand"
              checked={amenities.busStand}
              onChange={handleAmenitiesChange}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formAdditionalFacilities" className="mb-3">
          <Form.Label>Additional Facilities</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter additional facilities" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SellerHome;
