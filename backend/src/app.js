require('dotenv').config({path:'./config/.env'})

let express = require('express');
let app = express();

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
});

app.listen(PORT, () =>
  { console.log(`Listening on port ${PORT} http://localhost:${PORT}`)});