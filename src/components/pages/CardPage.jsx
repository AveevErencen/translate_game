import React, { useState } from 'react';
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

  //   const ModalButton = () => {
  //     const [modalOpen, setModalOpen] = useState(false)
  // }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={allCardsStyle}>
      {allThemes?.map((theme) => (
        <Card style={oneCardStyle} key={theme.id}>
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

{ /* <div>
        <button onClick={openModal}>Открыть модальное окно</button>
        {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Содержимое модального окна здесь</p>
          </div>
        </div>
        )}
      </div> */ }
