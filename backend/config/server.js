const supabase = require('./supabase');

async function probarConexion() {
    console.log("Intentando conectar a Supabase...");
     
    const { data, error } = await supabase.from('Usuarios').select('*').limit(1);

    if (error) {
        console.error('Error de conexión:', error.message);
    } else {
        console.log('Conexión exitosa. Base de datos respondiendo correctamente.');
        console.log('Datos de prueba recibidos:', data);
    }
}

// Ejecucion de prueba
probarConexion();
