const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require("cors");
const routes = require('./routes'); // Importando a variável
const app = express();
const server = require('http').Server(app);
const io = require('socket.io') (server);
mongoose.set('useUnifiedTopology', true);


app.use(cors());

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box); // Isola o usuário do restante que está conectado.
    })
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-caihv.mongodb.net/omnistack?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
);

app.use((req, res, next) => {
    req.io = io; // Informação global para aplicação

    return next(); // Sem o next, as requisições iriam parar aqui.
});

app.get ('/', (req, res) => res.send('To rondando na raiz,  Pai!'));

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Permite envio de arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use('/routes', routes);

// app.listen(3333);    
server.listen(process.env.PORT || 3333); // A Aplicação já houve protocolo http e websocket
