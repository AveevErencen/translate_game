import React from 'react';
import axios from 'axios';

export default function SignupPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      const response = await axios.post('/api/auth/signup', formData);
      if (response.status === 200) {
        window.location = '/themes';
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form id="myForm" action="#" method="POST">
        <label htmlFor="name">Имя</label>
        <input type="text" name="name" id="name" aria-describedby="nameHelpBlock" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" aria-describedby="emailHelpBlock" />

        <label htmlFor="password">Пароль</label>
        <input type="password" name="password" id="password" aria-describedby="passwordHelpBlock" />

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
