import pool from '../config/db.js';

class ProdutoService {
 
  async create({ nome, marca, categoria, preco, quantidade_estoque }) {
    const query = `
      INSERT INTO produtos (nome, marca, categoria, preco, quantidade_estoque)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [nome, marca, categoria, preco, quantidade_estoque];
    
    const { rows } = await pool.query(query, values);
    return rows[0]; 
  }

  async getall() {
    const query = 'select * from produtos;';
    const { rows } = await pool.query(query);
    return rows; 
  }
}

export default new ProdutoService();