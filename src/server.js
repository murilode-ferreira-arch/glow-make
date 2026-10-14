import express from 'express';
import itemRoutes from './routes.js';

const app = express();
app.use(express.json());
app.use('/produtos', itemRoutes);

app.listen(3000, () => console.log('OK'));