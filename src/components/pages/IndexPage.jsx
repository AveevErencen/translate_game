import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function IndexPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div style={{ width: '18rem' }}>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="card">
          <div className="card-front">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
                <Button variant="primary" onClick={handleFlip}>
                  Flip Card
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="card-back">
            <Card>
              <Card.Body>
                <Card.Title>Back Side</Card.Title>
                {/* Add content for the back side of the card here */}
                <Button variant="primary" onClick={handleFlip}>
                  Flip Card Back
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
