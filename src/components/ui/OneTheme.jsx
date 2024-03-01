import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function OneTheme({ theme }) {
  const wordBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px',
    border: '1px solid black',
  };

  // const genCardPageStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   border: '1px solid black',
  //   padding: '70px',

  // };

  const oneCardStyle = {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'column',
    width: '18rem',
  };

  const clickHandler = (id) => {
    window.location.href = `/cardpage/${id}`;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card key={theme?.id} style={oneCardStyle}>
        <Card.Body style={oneCardStyle}>
          <div style={wordBoxStyle}>
            <Card.Title>{theme?.theme_name}</Card.Title>
          </div>
          <Button
            onClick={() => clickHandler(theme?.id)}
            name="button_translate"
            type="button"
            variant="primary"
          >
            Выбор
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
