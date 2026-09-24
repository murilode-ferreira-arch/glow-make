import { Router } from 'express';
import produtoService from '../services/produto.service.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const novoProduto = await produtoService.create(req.body);
    return res.status(201).json(novoProduto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const produtos = await produtoService.getAll();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;