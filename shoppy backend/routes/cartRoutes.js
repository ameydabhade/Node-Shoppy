import express from 'express';
import { addToCart, deleteCartItem, updateCartItem } from '../controllers/cartController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const app = express();

app.post('/api/cart', authMiddleware, addToCart);
app.put('/api/cart/:id', authMiddleware, updateCartItem);
app.delete('/api/cart/:id', authMiddleware, deleteCartItem);

export default app;
