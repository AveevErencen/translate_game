import React from 'react';
import {
  Col, Row, Container, Button,
} from 'react-bootstrap';

export default function UserPage({ user }) {
  return (
    <Container>
      <h2>Личный кабинет</h2>
      <Row>
        <Col>
          <h4>Информация о пользователе:</h4>
          <p>
            <strong>Имя:</strong>
            {' '}
            {user.name}
          </p>
          <p>
            <strong>Email:</strong>
            {' '}
            {user.email}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
