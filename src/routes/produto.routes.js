import { Router } from 'express';
import ItemService from '../services/produto.service.js';

const router = Router();

router.post('/', async (req, res) => {
  const item = await ItemService.create(req.body);
  return res.status(201).json(item);
});

router.get('/', async (req, res) => {
  const itens = await ItemService.getAll();
  return res.status(200).json(itens);
});

export default router;