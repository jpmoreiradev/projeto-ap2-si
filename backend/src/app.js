import express from "express";


const app = express();
const PORT = process.env.PORT || 3333

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('Serve is running at: http://localhost:3333');
})
