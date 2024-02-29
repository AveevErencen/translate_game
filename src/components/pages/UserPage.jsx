import React from 'react';
import {
  Col, Row, Container,
} from 'react-bootstrap';

export default function UserPage({ user, initState }) {
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
  return (
    <Container style={containerStyle}>
      <h2>Личный кабинет</h2>
      <Row style={rowStyle}>
        <Col style={rowStyle}>
          <h4 style={containerStyle}>Информация о пользователе:</h4>
          <p style={containerStyle}>
            <strong>Имя:</strong>
            {' '}
            {user.name}
          </p>
          <p>
            <strong>Email:</strong>
            {' '}
            {user.email}
          </p>
          <h4>Прогресс обучения</h4>
          {allThemeArr?.map((theme, index) => (
            <p key={theme.id}>
              {`${index + 1}.${theme.theme_name}   `}
              {' '}
              {progressArr.filter((elem) => elem.theme_id === theme.id).length}
              {' '}
              из
              {' '}
              {allCardsArr.filter((card) => card.theme_id === theme.id).length}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
