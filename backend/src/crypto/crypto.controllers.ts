import { Router } from 'express';
import { CryptoService } from './crypto.service';

const cryptoRouter = Router();

const cryptoService = new CryptoService();

cryptoRouter.get('/', async (req, res) => {
  const { limit, page } = req.query;
  const data = await cryptoService.getCrypto(limit as string, page as string);
  res.status(200).json(data);
});

export default cryptoRouter;
