import pool from '../config/db.js';

class produtoService{
  async create (dados){
const {rows} = await pool.query('insert into produtos (nome,marca,preco,categoria,quantidade_estoque) values ($1,$2,$3,$4,$5) returning*;', [
      dados.nome,
      dados.marca,
      dados.preco,
      dados.categoria,
      dados.quantidade_estoque
    ]);
    return rows;
  }
  async getAll (){
    const {rows}  = await pool.query('select * from produtos;');
    return rows;
  }
}
export default new produtoService();