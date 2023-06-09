import express from "express";
import cors from 'cors';
import productsRouter from "./routes/productsRouter.js"
import clientsRouter from "./routes/clientRouter.js"

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({"hello": 'Welcome to our products api'})
});

app.use('/produtos', productsRouter);
app.use('/cliente', clientsRouter);

export default app;