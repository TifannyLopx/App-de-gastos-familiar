const express= require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios',usuarioController.obtenerUsuarios);

router.post('/usuarios', usuarioController.crearUsuario);


module.exports = router