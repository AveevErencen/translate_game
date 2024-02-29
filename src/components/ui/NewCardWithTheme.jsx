import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function NewCardWithTheme({ handleSubmit }) {
  const [input, setInput] = useState({
    word_eng: '',
    word_rus: '',
    theme_id: '',
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(input);
      }}
    >
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>
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
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}
