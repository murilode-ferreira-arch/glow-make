import { Router } from 'express';
import itemService from './service.js';

const router = Router();

router.post('/', async (req, res) => {
  const item = await itemService.create(req.body);
  return res.status(201).json(item);
});

router.get('/', async (req, res) => {
  const itens = await itemService.getAll();
  return res.status(200).json(itens);
});

export default router;