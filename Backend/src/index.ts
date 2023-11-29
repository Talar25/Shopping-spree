import express from 'express';
import productService from './services/productService';
import toNewProduct from './utils';
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send(productService.getProducts());
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(productService.getOneProduct(id));
});

app.post('/', (req, res) => {
  try {
    const newProduct = toNewProduct(req.body);
    const addedPerson = productService.addProduct(newProduct);
    res.json(addedPerson);
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
