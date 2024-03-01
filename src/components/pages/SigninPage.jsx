import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SigninPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      const response = await axios.post('/api/auth/signin', formData);
      if (response.status === 200) {
        window.location = '/themes';
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form id="myForm" action="#" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" aria-describedby="emailHelpBlock" />

        <label htmlFor="password">Пароль</label>
        <input type="password" name="password" id="password" aria-describedby="passwordHelpBlock" />

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
