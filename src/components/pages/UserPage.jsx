import React, { useState } from 'react';
import { Col, Row, Container, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import NewCard from '../ui/NewCard';

export default function UserPage({ user, initState }) {
  const [modalActive, setModalActive] = useState(true);
  const [editInput, setEditInput] = useState({
    name: '',
    password: '',
  });
  const allCardsArr = initState[0];
  const allThemeArr = initState[1];
  const progressArr = initState[2];
  console.log(progressArr);
  // const [allCards, setAllCards] = useState(allCardsArr);
  // const [allTheme, setAllCards] = useState(allThemeArr);
  // const [allProgress, setAllCards] = useState(progressArr);

  const containerStyle = {
    marginTop: '70px',
  };

  const rowStyle = {
    marginBottom: '25px',
  };

  const handleSubmit = async (e, input, setInput) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/new', input);
      if (response.status === 200) {
        window.location = '/account';
      }
    } catch (error) {
      console.log(error);
      alert(error.data.message);
    }
  };

  const handleChange = (e) => {
    setEditInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const editHandler = async (e, editInput) => {
    e.preventDefault();
  };

  return (
    <Container style={containerStyle}>
      <h2>Личный кабинет</h2>
      <Row style={rowStyle}>
        <Col style={rowStyle}>
          <h4 style={containerStyle}>Информация о пользователе:</h4>
          <p style={containerStyle}>
            <strong>Имя:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <h4>Прогресс обучения</h4>
          {allThemeArr?.map((theme, index) => (
            <p key={theme.id}>
              {`${index + 1}.${theme.theme_name}   `}{' '}
              {progressArr.filter((elem) => elem.theme_id === theme.id).length} из{' '}
              {allCardsArr.filter((card) => card.theme_id === theme.id).length}
            </p>
          ))}
        </Col>
        <Button
          onClick={() => setModalActive(true)}
          name="button_update"
          type="button"
          variant="primary"
        >
          Редактировать профиль
        </Button>
        <Modal active={modalActive} setActive={setModalActive}>
          <Row>
            <Form onSubmit={editHandler}>
              <Form.Floating className="mb-3">
                <Form.Control
                  name="word_eng"
                  value={editInput.name}
                  onChange={handleChange}
                  id="floatingNameCustom"
                  type="text"
                  placeholder="Math"
                />
                <label htmlFor="floatingNameCustom">Введите имя</label>
              </Form.Floating>
              <Form.Floating>
                <Form.Control
                  name="word_rus"
                  value={editInput.password}
                  onChange={handleChange}
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Математика"
                />
                <label htmlFor="floatingPasswordCustom">Введите пароль</label>
              </Form.Floating>
              <Button variant="primary" type="submit" className="mt-3">
                Добавить
              </Button>
            </Form>
          </Row>
        </Modal>
        <Col xs={6}>
          <NewCard handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </Container>
  );
}
