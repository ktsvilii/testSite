import { Router } from 'express';
import { CryptoService } from './crypto.service';

const cryptoRouter = Router();

const cryptoService = new CryptoService();

cryptoRouter.get('/currency', async (req, res) => {
  const { limit, page } = req.query;
  const data = await cryptoService.getCrypto(limit as string, page as string);
  res.status(200).json(data);
});

cryptoRouter.get('/news', async (req, res) => {
  const { page } = req.query;
  const data = await cryptoService.getCryptoNews(page as string);
  res.status(200).json(data);
});

export default cryptoRouter;
