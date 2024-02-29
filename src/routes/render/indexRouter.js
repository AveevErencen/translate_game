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

router.get('/cardpage/:id', async (req, res) => {
  const { id } = req.params;
  const allThemes = await Card.findAll({ where: { theme_id: id } });
  res.render('CardPage', { allThemes });
});

export default router;
