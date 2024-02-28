import express from 'express';

const authRouter = express.Router();

authRouter.get('/signup', (req, res) => {
  res.render('SignupPage');
});

authRouter.get('/signin', (req, res) => {
  res.render('SigninPage');
});

authRouter.get('/', (req, res) => {
  res.render('IndexPage');
});

export default authRouter;


