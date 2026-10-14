import express from 'express';
import pr

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/produtos', produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor GlowMake rodande em http://localhost:${PORT}`);
});
