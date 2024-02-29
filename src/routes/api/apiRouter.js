import express from 'express';
import { Op } from 'sequelize';
import { Theme } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/search', async (req, res) => {
  try {
    const { text } = req.query;
    const findtheme = await Theme.findAll({ where: { theme_name: { [Op.like]: `%${text}%` } } });
    console.log(findtheme, '---------------');
    res.json(findtheme);
  } catch (error) {
    console.log(error).send(error);
  }
});

export default router;
