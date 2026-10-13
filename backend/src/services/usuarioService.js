const supabase = require("../../config/supabase");

//GET Usuarios 
const obtenerUsuariosDB = async () => {
    const {data} = await supabase
    .from('Usuarios')
    .select('*');
    return data;
}

// POST Nuevo usuario
const crearUsuarioDB= async (datosUsuario) => {
    const {data} = await supabase
    .from('Usuarios')
    .insert([datosUsuario])
    .select();

    return data;

}

module.exports = {
    obtenerUsuariosDB,
    crearUsuarioDB
}