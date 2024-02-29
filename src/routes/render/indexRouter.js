import express from 'express';
import { Card, Theme, Progress } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('IndexPage');
});

router.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  res.render('ChoosePage', { themes });
});

router.get('/cardpage', async (req, res) => {
  const allThemes = await Card.findAll(); // Надо поменять на allCards
  res.render('CardPage', { allThemes });
});



export default router;
