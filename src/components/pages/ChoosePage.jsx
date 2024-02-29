import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import OneTheme from '../ui/OneTheme';

export default function ChoosePage({ themes }) {
  const [findTheme, setFindTheme] = useState('');
  const [oneTheme, setOneTheme] = useState([]);

  const chandgeHandler = (e) => {
    setFindTheme(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (findTheme.length > 0) {
        axios(`/api/search?text=${findTheme}`).then((res) => setOneTheme(res.data));
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [findTheme]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InputGroup style={{ width: '400px' }} className="mb-3">
          <InputGroup.Text id="basic-addon1">Поиск по темам</InputGroup.Text>
          <Form.Control
            value={findTheme}
            onChange={chandgeHandler}
            placeholder="Выберите тему"
            type="text"
            // aria-label="Username"
            // aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {themes.map((theme) => (
          <OneTheme key={theme.id} theme={theme} />
        ))}
      </div>
      {/* <OneTheme themes={themes} /> */}
    </>
  );
}
