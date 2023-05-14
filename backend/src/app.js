import express from "express";
import userRouter from "./routes/userRouter.js"

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({"hello": 'Welcome to our products api'})
});


app.use('/user', userRouter);


export default app;