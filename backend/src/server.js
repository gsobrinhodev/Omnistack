const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-caihv.mongodb.net/omnistack?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
);

// app.get('/teste', (req, res) => {
//     return res.send('Hello Word');

// req = requisição
// res = resposta
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Permite envio de arquivos

app.use(require('./routes')); // Importando a variável

app.listen(3333);

