import 'dotenv/config';
import './database/index.js'
import app from './app.js'

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Serve is running at: http://localhost:${PORT}`);
})

