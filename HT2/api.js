const express = require('express');
const app = express();
const PORT = 8080;

app.get('/check', (req, res) => {
    res.status(200).send();
});

app.get('/info', (req, res) => {
    res.json({
        "Instancia": "Maquina 2 - Api Node",
        "Curso": "Seminario de Sistemas 1 A",
        "Grupo": "Grupo 1"
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API corriendo en el puerto ${PORT}`);
});