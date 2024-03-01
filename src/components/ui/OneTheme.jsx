import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function OneTheme({ themes }) {
  const clickHandler = (id) => {
    window.location.href = `/cardpage/${id}`;
  };

  return (
    <div className="mainCardTheme ">
      {themes?.map((theme) => (
        <Card className="oneCarsStyle" key={theme.id}>
          <Card.Body className="carsStyle">
            <div className="wordBoxStyle">
              <Card.Title>{theme.theme_name}</Card.Title>
            </div>
            <Button
              onClick={() => clickHandler(theme.id)}
              name="button_translate"
              type="button"
              variant="primary"
            >
              Выбор
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
