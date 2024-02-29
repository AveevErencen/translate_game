import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NewCard({ handleSubmit }) {
  const [input, setInput] = useState({
    word_eng: '',
    word_rus: '',
    theme_name: '',
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e, input);
      }}
    >
      <h2>Создать новую карточку</h2>
      <Form.Floating className="mb-3">
        <Form.Control
          name="theme_name"
          value={input.theme_name}
          onChange={handleChange}
          id="floatingInputCustom"
          type="text"
          placeholder="Школа"
        />
        <label htmlFor="floatingInputCustom">Тема</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          name="word_eng"
          value={input.word_eng}
          onChange={handleChange}
          id="floatingInputCustom"
          type="text"
          placeholder="Math"
        />
        <label htmlFor="floatingInputCustom">Слово на английском</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          name="word_rus"
          value={input.word_rus}
          onChange={handleChange}
          id="floatingPasswordCustom"
          type="text"
          placeholder="Математика"
        />
        <label htmlFor="floatingPasswordCustom">Слово на русском</label>
      </Form.Floating>
      <Button variant="primary" type="submit" className="mt-3">
        Добавить
      </Button>
    </Form>
  );
}
