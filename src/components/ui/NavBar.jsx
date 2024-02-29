import React from 'react';

export default function NavBar({ user }) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="brand-name">
          <a className="navbar-brand">English - Easy</a>
        </div>
        <div className="navbar-links">
          {user ? <a href="/account">{user.name}</a> : <a href="/auth/signin">Войти</a>}
          {user && <a href="/themes">Выбрать тему</a>}
          {user ? <a href="/auth/logout">Выйти</a> : <a href="/auth/signup">Зарегистрироваться</a>}
        </div>
      </div>
    </div>
  );
}

{ /* <Navbar expand="lg" className="bg-body-tertiary">
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
    </Navbar> */ }
