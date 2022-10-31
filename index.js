import express from 'express';
import { PORT, SWAPI_URL } from './config.js';
import starships from './routes/starships/starships.controller.js';
import classifications from './routes/classification/classification.controller.js';
import population from './routes/population/population.controller.js';
import axios from 'axios';

const app = express();
const axiosInstance = axios.create({
  baseURL: SWAPI_URL,
});

app.set('axios', axiosInstance);
app.use('/starships', starships);
app.use('/classifications', classifications);
app.use('/population', population);

app.listen(PORT, () => {
  console.log(`Starwars API listening on port ${PORT}`);
});
