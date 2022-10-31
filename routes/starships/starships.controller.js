import express from 'express';
import { returnStarships } from './starships.service.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const starships = await returnStarships(req.app.get('axios'));

  res.json(starships);
});

export default router;
