import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardPage({ allThemes }) {
  const wordBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '240px',
    // border: '1px solid red',
  };

  const oneCardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '18rem',
    // border: '1px solid green',
  };

  const allCardsStyle = {
    display: 'flex',
    justifyContent: 'spaceBetween',
    flexWrap: 'wrap',
    // border: '1px solid black',
  };

  const translateButtStyle = {
    margin: '20px',
  };

  return (
    <div style={allCardsStyle}>
      {allThemes?.map((theme) => (
        <Card style={oneCardStyle}>
          <Card.Body style={oneCardStyle}>
            <div style={wordBoxStyle}>
              <Card.Title>{theme.word_eng}</Card.Title>
            </div>
            <Button style={translateButtStyle} name="button_translate" type="button" variant="primary">Перевод</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
