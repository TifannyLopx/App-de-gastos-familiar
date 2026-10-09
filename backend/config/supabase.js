// Importacion de dotenv para poder leer la caja fuerte (.env)
require('dotenv').config();
// Impoetacion de la herramienta de supabase que instalaste
const { createClient } = require('@supabase/supabase-js');

// Sacamos las llaves de la caja fuerte
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Verificamos que las llaves existan, si no, lanzamos un error claro para no volvernos locos buscando el problema
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Faltan las credenciales de Supabase en el archivo .env');
}

// Creamos la conexión oficial
const supabase = createClient(supabaseUrl, supabaseKey);

// Exportamos esta conexión para poder usarla en otros archivos (como en tu server.js)
module.exports = supabase;