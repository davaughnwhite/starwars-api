import express from 'express';
import { getTotalPopulation } from './population.service.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const population = await getTotalPopulation(req.app.get('axios'));

  res.json(population);
});

export default router;
