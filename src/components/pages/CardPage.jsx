import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import OneCard from '../ui/OneCard';

export default function CardPage({ allCards }) {
  const [cards, setAllCards] = useState(allCards);

  const deleteHandler = async ({ cardId, cardThemeId }) => {
    // console.log(cardId, cardThemeId);
    const response = await axios.post('/api/card', { cardId, cardThemeId });
    if (response.status === 200) {
      setAllCards((prev) => prev.filter((card) => card.id !== cardId));
    }
  };

  const genDivStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <div style={genDivStyle}>
      {cards?.map((el) => (
        <OneCard el={el} deleteHandler={deleteHandler} key={el.id} />
      ))}
    </div>

  );
}
