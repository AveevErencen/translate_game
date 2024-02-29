import express from 'express';
import { Progress } from '../../../db/models';

const apiProgressRouter = express.Router();

apiProgressRouter.post('/answer', async (req, res) => {
  const { user_id, theme_id, card_id } = req.body;
  await Progress.create({ user_id, theme_id, card_id });
  res.sendStatus(200);
});

export default apiProgressRouter;
