import express from 'express';
import { Card, Theme, Progress } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('IndexPage');
});

router.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  console.log(themes);
  res.render('ChoosePage', { themes });
});

router.get('/cardpage/:id', async (req, res) => {
  const { id } = req.params;
  const allCards = await Card.findAll({ where: { theme_id: id } });
  const answers = await Progress.findAll({
    where: {
      user_id: res.locals.user.id,
    },
  });
  const cardIds = answers.map((el) => el.card_id);
  const findCards = allCards.filter((card) => !cardIds.includes(card.id));
  res.render('CardPage', { findCards, answers });
});

router.get('/account', async (req, res) => {
  const allCards = await Card.findAll();
  const themes = await Theme.findAll();
  const answers = await Progress.findAll({
    where: {
      user_id: res.locals.user.id,
    },
  });
  const initState = [allCards, themes, answers];
  res.render('UserPage', { initState });
});

router.get('*', (req, res) => {
  res.render('PageNotFound');
});
export default router;
