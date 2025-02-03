import express from 'express';
import { addProduct, getAllProducts, getProductById } from '../controllers/productController.js';

const app = express();

app.get('/api/products', getAllProducts);
app.get('/api/products/:id', getProductById);
app.post('/api/addproduct', addProduct);

export default app;
