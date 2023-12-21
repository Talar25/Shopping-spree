/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { Request, Response } from 'express';
import { NewProduct } from './types';
import productService from './services/productService';
import toNewProduct from './utils';
const app = express();
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());

app.get('/api/products', (_req: Request, res: Response) => {
  res.send(productService.getProducts());
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(productService.getOneProduct(id));
});

app.post('/api/products', (req: Request, res: Response) => {
  try {
    const newProduct: NewProduct = toNewProduct(req.body);
    const addedProduct = productService.addProduct(newProduct);
    res.json(addedProduct);
  } catch (error: unknown) {
    let errorMsg = 'Something went wrong.';
    if (error instanceof Error) {
      errorMsg += ' Error: ' + error.message;
    }
    res.status(400).send(errorMsg);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
