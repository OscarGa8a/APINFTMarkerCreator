//Importa express
const express = require('express');
//Importa el Router de express
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res) => {
        res.send('Inicio');
    });

    return router;
}