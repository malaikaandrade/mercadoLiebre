const express = require('express');
const app = express();

// usando recursos dinamicos
const path = require('path');
// usando recursos estaticos
app.use(express.static('public'));

//Ruta     /home
app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'));
});

//Ruta     /registro
app.get('/register', (req, res) =>{
    res.sendFile(path.resolve('./views/register.html'));
});

//Ruta     /ingresar
app.get('/ingresar', (req, res) =>{
    res.sendFile(path.resolve('./views/ingresar.html'));
});

let port = process.env.PORT || 3000
app.listen (port, () => {
    console.log('Server running');
});
