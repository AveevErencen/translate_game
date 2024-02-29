import express from 'express';
import { Card, Theme } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('IndexPage');
});

router.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  res.render('ChoosePage', { themes });
});

router.get('/cardpage', async (req, res) => {
  const allThemes = await Card.findAll();
  // console.log('---', allThemes);
  res.render('CardPage', { allThemes });
});

export default router;
