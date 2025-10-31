import express from 'express';
import { usuarioRoutes } from './routes/usuario_routes';

const app = express();

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.redirect('/usuario/login');
});

app.use(usuarioRoutes);

app.listen(3333, () => {
    console.log('Servidor rodando no endereço http://localhost:3333');
});