import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Suggestions.css';

const Suggestion = ({ image, title, text }) => {
  return (
    <Card className="suggestion-card">
      <img src={image} alt={title} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Suggestion;
