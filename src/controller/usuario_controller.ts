//Controller
//1. Recebe as requisições da view (HTTP)
//2. Faz as validações de dados
//3. Aplica e valida as regras de negócio
//4. Envia/Busca dados model
//5. Carrega/Devolve as informações para view.

import { log } from "console";
import { Request, Response } from "express";
import { Usuario, getByEmail, insert } from "../models/usuario";

//Parte: carregar páginas

export function show_login(req:Request,  res:Response){
    res.render('login', {response: null});
}


//Parte: CRUD

//essa funçao ira: 
//validar os campos usuarios
//validar  se ja existe um usuario xom o mesmo email
//caso tudo esteja valido, enviar os dados do user para a  model
//mostrar a pagina de login com as informaçoes de sucesso ou erro
export async function register(req: Request, res: Response){
    const { nome, email, senha } = req.body;

if(!nome || !email || !senha) {
    return res.render('login', {
        response: {
            type: 'error',
            value: 'Preencha os campos corretamente'
        }
    })
}

    const userFound = await getByEmail(email)

    if(userFound) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'email já cadastrado'
    }
        });
    }

    const usuario: Usuario = {
        nome,
        email,
        senha
    }

await insert(usuario);
return res.render('login', {
    response: {
        type: 'errsuccessor',
        value: 'usuario cadastrado com sucesso'
}
});

    res.render('login');
}

