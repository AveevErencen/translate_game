import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import OneTheme from '../ui/OneTheme';

export default function ChoosePage({ themes }) {
  const [findTheme, setFindTheme] = useState('');

  const chandgeHandler = (e) => {
    setFindTheme(e.target.value);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Поиск по темам</InputGroup.Text>
        <Form.Control
          onChange={chandgeHandler}
          placeholder="Выберите тему"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <OneTheme themes={themes} />
    </>
  );
}
