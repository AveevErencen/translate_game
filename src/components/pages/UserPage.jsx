import React, { useState } from 'react';
import { Col, Row, Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import NewCard from '../ui/NewCard';
import ModalInput from '../ui/ModalInput';

export default function UserPage({ user, initState }) {
  const [userName, setUserName] = useState(user.name);
  const [modalActive, setModalActive] = useState(false);
  const [editInput, setEditInput] = useState({
    name: '',
    password: '',
  });
  const allCardsArr = initState[0];
  const allThemeArr = initState[1];
  const progressArr = initState[2];

  const containerStyle = {
    marginTop: '70px',
    display: 'flex',
  };

  const rowStyle = {
    marginBottom: '25px',
  };

  const handleSubmit = async (e, input) => {
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

  const editHandler = async (e) => {
    e.preventDefault();
    try {
      const { id } = user;
      const updateData = Object.fromEntries(new FormData(e.target));
      const response = await fetch(`/api/auth/edit/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(updateData),
      });
      if (response.status === 200) {
        window.location = '/account';
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h2>Личный кабинет</h2>
      </div>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container style={containerStyle}>
          <Col style={rowStyle}>
            <h4>Информация о пользователе</h4>
            <p>
              <strong>
                Имя:
                {` ${userName}`}
              </strong>
            </p>
            <p>
              <strong>
                Email:
                {` ${user.email}`}
              </strong>
            </p>
            <Button
              onClick={() => setModalActive(true)}
              name="button_update"
              type="button"
              variant="primary"
            >
              Редактировать профиль
            </Button>
            <br />
            <br />
            <h4>Прогресс обучения</h4>
            {allThemeArr?.map((theme, index) => {
              const completed = progressArr.filter((elem) => elem.theme_id === theme.id).length;
              const total = allCardsArr.filter((card) => card.theme_id === theme.id).length;
              const now = Math.floor((completed / total) * 100);
              return (
                <p key={theme.id}>
                  {`${index + 1}.${theme.theme_name}   `}
                  <ProgressBar now={now} label={`${now}%`} />
                </p>
              );
            })}
          </Col>

          <ModalInput active={modalActive} setActive={setModalActive}>
            <Row>
              <Form onSubmit={editHandler}>
                <Form.Floating className="mb-3">
                  <Form.Control
                    name="name"
                    value={editInput.name}
                    onChange={handleChange}
                    id="floatingNameCustom"
                    type="text"
                    placeholder="Имя"
                  />
                  <label htmlFor="floatingNameCustom">Введите имя</label>
                </Form.Floating>
                <Form.Floating>
                  <Form.Control
                    name="password"
                    value={editInput.password}
                    onChange={handleChange}
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Пароль"
                  />
                  <label htmlFor="floatingPasswordCustom">Введите пароль</label>
                </Form.Floating>
                <Button variant="primary" type="submit" className="mt-3">
                  Изменить
                </Button>
              </Form>
            </Row>
          </ModalInput>
          <Col
            xs={6}
            style={{
              marginLeft: '200px',
              marginBottom: '210px',
            }}
          >
            <NewCard handleSubmit={handleSubmit} />
          </Col>
        </Container>
      </div>
    </div>
  );
}
