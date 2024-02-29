import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <Form onSubmit={handleSubmit}>
      <Form.Label htmlFor="inputPassword5">Имя</Form.Label>
      <Form.Control name="name" type="name" id="inputName" aria-describedby="passwordHelpBlock" />
      <Form.Label htmlFor="inputPassword5">Email</Form.Label>
      <Form.Control
        name="email"
        type="email"
        id="inputEmail"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="inputPassword5">Пароль</Form.Label>
      <Form.Control
        name="password"
        type="password"
        id="inputPassword"
        aria-describedby="passwordHelpBlock"
      />
      <Button type="submit" variant="secondary">
        Отправить
      </Button>{' '}
    </Form>
  );
}
