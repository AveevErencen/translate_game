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

export default router;
