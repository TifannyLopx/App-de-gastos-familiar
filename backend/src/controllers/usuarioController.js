const usuarioService= require('../services/usuarioService');

const obtenerUsuarios = async (req, res) => {
    const usuarios = await usuarioService.obtenerUsuariosDB();
    return res.json(usuarios);
}

const crearUsuario = async (req, res) => {
    const usuario = await usuarioService.crearUsuarioDB(req.body);
    return res.json(usuario);
}

module.exports = {
    obtenerUsuarios,
    crearUsuario
}