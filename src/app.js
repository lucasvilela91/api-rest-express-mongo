import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

import manipuladorDeErros from './middlewares/manipuladorDeErros.js';
const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  console.error('erro de conexão', erro);
});

conexao.once('open', () => {
  console.log('Conexao com o banco feita com sucesso');
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorDeErros);

// app.delete("/livros/:id", (req, res) => {
//   const index = buscaLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("livro removido com sucesso");
// });

export default app;
