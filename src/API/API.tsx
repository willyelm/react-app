import { Router } from 'express';

export const APIRouter = Router();

APIRouter.get('/', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});