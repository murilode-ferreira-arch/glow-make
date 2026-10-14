import pool from './db.js';

class ItemService {
  async create(dados) {
    const { rows } = await pool.query(
      'INSERT INTO produtos (nome, marca, categoria, preco, quantidade_estoque) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
      [dados.nome, dados.marca, dados.categoria, dados.preco, dados.quantidade_estoque]
    );
    return rows[0];
  }

  async getAll() {
    const { rows } = await pool.query('SELECT * FROM produtos;');
    return rows;
  }
}

export default new ItemService();