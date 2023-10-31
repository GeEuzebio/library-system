const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
//uso do path para carregar páginas html
app.use(express.static(path.join(__dirname, 'routes')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:5000');
});