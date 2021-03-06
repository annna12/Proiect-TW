const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'fun.html'));
});

app.post('/', function(req, res) {
    const { name, data } = req.body;
    const age = Date.now() - new Date(data).getTime();
    const ageDays = Math.floor(age / (1000 * 60 * 60 * 24));
    res.send(`Salut, ${name}! Trăiești de ${ageDays} zile.`);
});

app.listen(process.env.PORT || 3000);