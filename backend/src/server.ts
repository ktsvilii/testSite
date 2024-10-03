import express from 'express';
import dotenv from 'dotenv';
import cryptoRouter from './crypto/crypto.controllers';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 4200;

async function main() {
  app.use('/api/crypto', cryptoRouter);

  app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });
}

main();
