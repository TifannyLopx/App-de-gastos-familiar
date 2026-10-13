const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config/.env') });
let express = require('express');
let app = express();

const PORT = process.env.PORT

app.use(express.json())
// importar las rutas de los archivos es el router (Leer Notion investigación para especificaciones)
const usuarioRutas = require('./routes/usuarioRutas')

app.use('/api', usuarioRutas)


app.listen(PORT, () =>
  { console.log(`Listening on port ${PORT} http://localhost:${PORT}`)});