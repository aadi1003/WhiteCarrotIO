import express from 'express';
import { getGoogleAuthURL, getGoogleUser, getUserEvents } from '../utils/googleAuth.js';

const router = express.Router();

router.get('/login', (req, res) => {
  const url = getGoogleAuthURL();
  res.send({ url });
});

router.get('/callback', async (req, res) => {
  const code = req.query.code;
  const { tokens, user } = await getGoogleUser(code);
  req.session.user = { tokens, user };
  res.redirect('http://localhost:5173');
});

router.get('/events', async (req, res) => {
  const { tokens } = req.session.user || {};
  if (!tokens) return res.status(401).send('Unauthorized');

  const events = await getUserEvents(tokens);
  res.send(events);
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => res.send({ message: 'Logged out successfully' }));
});

export default router;