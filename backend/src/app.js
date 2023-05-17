import express from "express";
import productsRouter from "./routes/productsRouter.js"

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({"hello": 'Welcome to our products api'})
});

app.use('/products', productsRouter);

export default app;