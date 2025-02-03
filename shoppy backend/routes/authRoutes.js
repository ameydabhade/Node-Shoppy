import express from 'express';
import { register, login } from '../controllers/authController.js';

const app = express();

app.post('/api/register', register);
app.post('/api/login', login);

export default app;
