import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar({ user }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? `${user.name}`
              : <Nav.Link href="/auth/signin">Войти</Nav.Link>}
            {user ? <Nav.Link href="/auth/logout">Выйти</Nav.Link>
              : <Nav.Link href="/auth/signup">Зарегестрироваться</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
