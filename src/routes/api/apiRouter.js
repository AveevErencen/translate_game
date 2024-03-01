import express from 'express';
import { Op } from 'sequelize';
import { Theme, Card, Progress } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' }); // Добавить на первую страницу
});

router.get('/search', async (req, res) => {
  try {
    const { text } = req.query;

    const where = {};

    if (text !== '') {
      where.theme_name = { [Op.iLike]: `%${text}%` };
    }
    const findtheme = await Theme.findAll({ where });

    res.json(findtheme);
  } catch (error) {
    console.log(error).send(error);
  }
});

router.post('/new', async (req, res) => {
  const { word_eng, word_rus, theme_name } = req.body;
  if (!word_eng || !word_rus || !theme_name) return res.status(400).json({ message: 'Пожалуйста, заполните все поля' });

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
});

router.post('/card', async (req, res) => {
  const { cardId, cardThemeId } = req.body;
  // console.log('dfds', cardId, cardThemeId);
  await Progress.create({ user_id: res.locals.user.id, card_id: cardId, theme_id: cardThemeId });
  res.sendStatus(200);
});

export default router;
