import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';

export default function OneCard({ el, deleteHandler }) {
  const [oneCard, setOneCard] = useState(el);
  const [flip, setFlip] = useState(false);

  return (
    <div>
      <ReactCardFlip
        isFlipped={flip}
        flipDirection="vertical"
      >
        <div style={genBackground}>
          <Card style={frontCardStyle} key={oneCard.id}>
            <Card.Body style={innerCardStyle}>
              <div style={wordBoxStyle}>
                <Card.Title>{oneCard.word_eng}</Card.Title>
              </div>
              <Button style={translateButtStyle} name="button_translate" type="button" variant="primary" onClick={() => setFlip(!flip)}>Перевод</Button>
            </Card.Body>
          </Card>
        </div>

        <div style={genBackground}>
          <Card style={bottomCardStyle} key={oneCard.id}>
            <Card.Body style={innerCardStyle}>
              <div style={wordBoxStyle}>
                <Card.Title>{oneCard.word_rus}</Card.Title>
              </div>
              <div style={{ display: 'flex' }}>
                <Button style={translateButtStyle} name="button_delete" type="button" variant="primary" onClick={() => deleteHandler({ cardId: oneCard.id, cardThemeId: oneCard.theme_id })}>Изучено</Button>
                <Button style={translateButtStyle} name="button_back" type="button" variant="primary" onClick={() => setFlip(!flip)}>Назад</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

      </ReactCardFlip>

    </div>
  );
}

const frontCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '18rem',
  // border: '5px solid red',
};

const wordBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '240px',
  // border: '1px solid red',
};

const bottomCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '18rem',
  backgroundColor: 'lightGray',
  // border: '1px solid blue',
};

const innerCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '18rem',
  // border: '1px solid green',
};

const translateButtStyle = {
  margin: '20px',
};

const genBackground = {
  display: 'flex',
  justifyContent: 'center',
};
