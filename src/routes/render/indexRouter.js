import express from 'express';
import { Card } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('IndexPage', initState);
});

router.get('/cardpage', async (req, res) => {
  const allThemes = await Card.findAll();
  // console.log('---', allThemes);
  res.render('CardPage', { allThemes });
});

export default router;
