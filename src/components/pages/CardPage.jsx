import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardPage() {
  const wordBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px',
    border: '1px solid black',
  };

  const genCardPageStyle = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
    padding: '70px',

  };

  const oneCardStyle = {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'column',
    width: '18rem',

  };

  return (
    <div style={genCardPageStyle}>

      <Card style={oneCardStyle}>
        <Card.Body style={oneCardStyle}>
          <div style={wordBoxStyle}>
            <Card.Title>Apple</Card.Title>
          </div>
          <Button name="button_translate" type="button" variant="primary">Перевод</Button>
        </Card.Body>
      </Card>

      <Card style={oneCardStyle}>
        <Card.Body style={oneCardStyle}>
          <div style={wordBoxStyle}>
            <Card.Title>Banana</Card.Title>
          </div>
          <Button name="button_translate" type="button" variant="primary">Перевод</Button>
        </Card.Body>
      </Card>

      <Card style={oneCardStyle}>
        <Card.Body style={oneCardStyle}>
          <div style={wordBoxStyle}>
            <Card.Title>Watermelon</Card.Title>
          </div>
          <Button name="button_translate" type="button" variant="primary">Перевод</Button>
        </Card.Body>
      </Card>

    </div>
  );
}
