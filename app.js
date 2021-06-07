const express = require('express');
const app = express();
const path = require('path');

//Servidor
app.listen(3000, () =>{
    console.log("Servidor corriento en 3000");
});
app.use( express.static(path.resolve(__dirname, './DH-Heroes/public')) );
//Rutas de nuestra pagina
app.get('/', (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, "./DH-Heroes/views/index.html"));
});
app.get('/babbage', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/babbage.html"));
});
app.get('/berners-lee', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/berners-lee.html"));
});
app.get('/clarke', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/clarke.html"));
});
app.get('/hamilton', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/hamilton.html"));
});
app.get('/hopper', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/hopper.html"));
});
app.get('/lovelace', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/lovelace.html"));
});
app.get('/turing', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./DH-Heroes/views/turing.html"));
});
