import express from 'express';
import { getClassifications } from './classification.service.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const classifications = await getClassifications(req.app.get('axios'));

  res.json(classifications);
});

export default router;
