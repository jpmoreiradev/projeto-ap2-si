import express from "express";
import productsRouter from "./routes/productsRouter.js"
import clientesRouter from "./routes/clientesRoutes.js"

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({"hello": 'Welcome to our products api'})
});

app.use('/products', productsRouter);
app.use('/cliente', clientesRouter );

export default app;