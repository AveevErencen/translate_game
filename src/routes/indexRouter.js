import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('IndexPage', initState);
});

router.get('/cardpage', (req, res) => {
  const initState = {};
  res.render('CardPage', initState);
});

export default router;
