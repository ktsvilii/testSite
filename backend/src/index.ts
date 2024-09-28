import express from 'express';
import dotenv from 'dotenv';
import { CategoriesResponse } from './types';

const app = express();
const port = 5000;

dotenv.config();

const fetchData = async (limit: string) => {
  try {
    const categoriesData = await fetch(
      `https://api.cryptorank.io/v1/currencies?api_key=${process.env.CRYPTORANK_KEY}&limit=${limit}`,
    );
    const { data }: { data: CategoriesResponse[] } = await categoriesData.json();

    return data;
  } catch (ex) {
    console.log(ex);
  }
};

app.get('/api/top-crypto', async (req, res) => {
  const { limit } = req.query;
  const data = await fetchData(limit as string);
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
