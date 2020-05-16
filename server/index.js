//Importa express
const express = require('express');
//Importa variables de entorno
require('dotenv').config({path: 'variables.env'});
//Importa el router
const router = require('./router');
//Crea el servidor
const app = express();

//Asigna directorio estatico
app.use('/public', express.static('public'));

//Habilita routing
app.use('/api', router());

//Asigna el host
const host = process.env.HOST || '0.0.0.0';
//Asigna el puerto
const port = process.env.PORT || 4000;

//Arranca el servidor
app.listen(port, host, () => {
    console.log(`Servidor iniciado en ${host} : ${port}`);
});