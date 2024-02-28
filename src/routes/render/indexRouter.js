import express from 'express';
import { Theme } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('IndexPage', initState);
});

router.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  res.render('ChoosePage', { themes });
});

router.get('/cardpage', (req, res) => {
  const initState = {};
  res.render('CardPage', initState);
});

export default router;
