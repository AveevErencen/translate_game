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
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(input);
      }}
    >
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
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}


// этот хендлер должен быть на странице личного кабинета

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/new', input);
      if (response.status === 200) {
        window.location = '/account';
      }
    } catch (error) {
      console.log(error);
      alert(error.data.message);
    }
  };

// эта ручка должна быть в apiRouter

  apiRouter.post('/new', async (req, res) => {
    const { word_eng, word_rus, theme_name } = req.body;
    if (!word_eng || !word_rus || !theme_name) return res.status(400).json({ message: 'Пожалуйста, заполните все поля' });
  
    await Theme.create(theme_name)

    const [newCard, created] = await Card.findOrCreate({
      where: { word_eng },
      defaults: { word_rus, theme_id }, // как выташить айди темы???
    });
  
    if (!created) return res.status(403).json({ message: 'Такая карточка уже существует' });
  
  });