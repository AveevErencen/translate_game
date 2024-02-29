import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar({ user }) {
  const navLinkStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" />
        <a className="navbar-brand">EnglishLearningApp</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <Nav.Link style={navLinkStyle} href="/account">
                {user.name}
              </Nav.Link>
            ) : (
              <Nav.Link style={navLinkStyle} href="/auth/signin">
                Войти
              </Nav.Link>
            )}
            {user && (
              <Nav.Link style={navLinkStyle} href="/themes">
                Выбрать тему
              </Nav.Link>
            )}
            {user ? (
              <Nav.Link style={navLinkStyle} href="/auth/logout">
                Выйти
              </Nav.Link>
            ) : (
              <Nav.Link style={navLinkStyle} href="/auth/signup">
                Зарегистрироваться
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
