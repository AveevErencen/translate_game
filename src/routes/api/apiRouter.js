import express from 'express';
import { Op } from 'sequelize';
import { Theme, Progress } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
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

router.post('/card', async (req, res) => {
  const { cardId, cardThemeId } = req.body;
  // console.log('dfds', cardId, cardThemeId);
  await Progress.create({ user_id: res.locals.user.id, card_id: cardId, theme_id: cardThemeId });
  res.sendStatus(200);
});

export default router;
