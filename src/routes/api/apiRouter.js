import express from 'express';
import { Op } from 'sequelize';
import { Theme, Card } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/search', async (req, res) => {
  try {
    const { text } = req.query;
    const findtheme = await Theme.findAll({ where: { theme_name: { [Op.like]: `%${text}%` } } });
    console.log(findtheme, '---------------');
    res.json(findtheme);
  } catch (error) {
    console.log(error).send(error);
  }
});

router.post('/new', async (req, res) => {
  const { word_eng, word_rus, theme_name } = req.body;
  if (!word_eng || !word_rus || !theme_name)
    return res.status(400).json({ message: 'Пожалуйста, заполните все поля' });

  const [newTheme, created] = await Theme.findOrCreate({
    where: { theme_name },
  });

  if (created) {
    await Card.create({ word_eng, word_rus, theme_id: newTheme.id });
  } else {
    const findTheme = await Theme.findOne({
      where: { theme_name },
    });
    await Card.create({ word_eng, word_rus, theme_id: findTheme.id });
  }

  // const [newCard, created] = await Card.create({
  //   where: { word_eng },
  //   defaults: { word_rus, theme_id: createdTheme.id },
  // });

  // if (!created) return res.status(403).json({ message: 'Такая карточка уже существует' });
});

export default router;
