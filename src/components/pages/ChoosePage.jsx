import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function ChoosePage({ themes }) {
  const [theme, setTheme] = useState(themes);

  const [findTheme, setFindTheme] = useState('');

  const chandgeHandler = (e) => {
    setFindTheme(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Поиск по темам</InputGroup.Text>
      <Form.Control
        onChange={chandgeHandler}
        placeholder="Тема"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}
