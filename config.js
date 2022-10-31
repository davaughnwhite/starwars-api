import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8080;
export const SWAPI_URL = process.env.SWAPI_URL || 'https://swapi.dev/api/';
