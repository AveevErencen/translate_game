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
