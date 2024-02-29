import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';

export default function CardPage({ allThemes }) {
  const wordBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '240px',
    // border: '1px solid red',
  };

  const frontCardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '18rem',
    // position: 'relative',

    // border: '1px solid green',
  };

  const bottomCardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '18rem',
    backgroundColor: 'lightGray',
    // position: 'absolute',

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

  const allCardsStyle = {
    display: 'flex',
    justifyContent: 'spaceBetween',
    flexWrap: 'wrap',
    // border: '1px solid black',
  };

  const translateButtStyle = {
    margin: '20px',
  };

  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection="vertical"
    >

      <div style={allCardsStyle}>
        {allThemes?.map((theme) => (
          <Card style={frontCardStyle} key={theme.id}>
            <Card.Body style={innerCardStyle}>
              <div style={wordBoxStyle}>
                <Card.Title>{theme.word_eng}</Card.Title>
              </div>
              <Button style={translateButtStyle} name="button_translate" type="button" variant="primary" onClick={() => setFlip(!flip)}>Перевод</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div style={allCardsStyle}>
        {allThemes?.map((theme) => (
          <Card style={bottomCardStyle} key={theme.id}>
            <Card.Body style={innerCardStyle}>
              <div style={wordBoxStyle}>
                <Card.Title>{theme.word_rus}</Card.Title>
              </div>
              <div style={{ display: 'flex' }}>
                <Button style={translateButtStyle} name="button_delete" type="button" variant="primary">Изучено</Button>
                <Button style={translateButtStyle} name="button_back" type="button" variant="primary" onClick={() => setFlip(!flip)}>Назад</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

    </ReactCardFlip>

  );
}


// entriesApiRouter.delete('/api/songs/:id', async (req, res) => {
//   const { id } = req.params;
//   await Entry.destroy({ where: { id } });
//   return res.sendStatus(200).redirect('/all-the-entries');
//   // res.sendStatus(200);
// });
