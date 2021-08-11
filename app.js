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

app.listen (3000, () => console.log('Server running at port 3000'));
