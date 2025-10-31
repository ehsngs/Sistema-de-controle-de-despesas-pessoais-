import  { Router } from 'express';
import { login, register, show_login } from '../controller/usuario_controller';

const usuarioRoutes = Router();

usuarioRoutes.get('/usuario/login', show_login);
usuarioRoutes.post('/usuario/register', register);

usuarioRoutes.post('/usuario/login', login);

export{
    usuarioRoutes
}