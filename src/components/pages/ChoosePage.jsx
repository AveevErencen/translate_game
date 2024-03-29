import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneTheme from '../ui/OneTheme';

export default function ChoosePage({ themes }) {
  const [findTheme, setFindTheme] = useState('');
  const [oneTheme, setOneTheme] = useState(themes);

  const chandgeHandler = (e) => {
    setFindTheme(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios(`/api/search?text=${findTheme}`).then((res) => setOneTheme(res.data));
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [findTheme]);

  return (
    <>
      <div className="container">
        <div className="inputGroup">
          <div className="inputGroupText">Поиск по темам</div>
          <input
            value={findTheme}
            onChange={chandgeHandler}
            placeholder="Выберите тему"
            type="text"
            className="formControl"
          />
        </div>
      </div>
      <OneTheme themes={oneTheme} />
    </>
  );
}
