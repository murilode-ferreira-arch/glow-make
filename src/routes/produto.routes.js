import { Router } from 'express';
import produtoService from '../services/produto.service.js';

const router = Router();

router.post('/', async (req, res) => {
  const produtos = await produtoService.create(req.body);
  return res.status(201).json(produtos);
});

router.get('/', async (req, res) => {
  const produtos = await produtoService.getAll();
  return res.status(200).json(produtos);
});

export default router;