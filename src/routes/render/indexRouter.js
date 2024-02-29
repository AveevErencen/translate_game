import express from 'express';
import {
  Theme, User, Card, Progress,
} from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('IndexPage');
});

router.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  res.render('ChoosePage', { themes });
});

router.get('/cardpage', (req, res) => {
  const initState = {};
  res.render('CardPage', initState);
});
router.get('/account', async (req, res) => {
  const allCards = await Card.findAll();

  const themes = await Theme.findAll();

  const answers = await Progress.findAll({
    where: {
      id: res.locals.user.id,
    },
  });
  const initState = [allCards, themes, answers];
  res.render('UserPage', { initState });
});
export default router;
