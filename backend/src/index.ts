import express from 'express';
import dotenv from 'dotenv';
import { Coin, CoinRawData, currencyFormatter, getVolumeToMarketCap } from './utils';

const app = express();
const port = 5000;

dotenv.config();

const fetchData = async (limit: string, page: string) => {
  try {
    const data = await fetch(`https://openapiv1.coinstats.app/coins?limit=${limit}&page=${page}`, {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': process.env.FETCH_KEY! },
    });
    const { result }: { result: CoinRawData[] } = await data.json();

    const coins: Coin[] = result.map(({ id, name, symbol, price, icon, volume, marketCap, rank }) => ({
      id,
      name,
      symbol,
      price: currencyFormatter.format(price),
      icon,
      rank,
      marketCap: currencyFormatter.format(marketCap),
      volumeToMarketCap: getVolumeToMarketCap(volume, marketCap).toFixed(2),
    }));

    return coins;
  } catch (ex) {
    console.log(ex);
  }
};

app.get('/api/top-crypto', async (req, res) => {
  const { limit, page } = req.query;
  const data = await fetchData(limit as string, page as string);
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
