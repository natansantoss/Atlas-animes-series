import {  Request, Response, NextFunction  } from 'express'
import jwt from 'jsonwebtoken'

// Importa a "Chave" para verificar o Token
import authSecret from '../config/auth.json'

// Cria um Middleware para verificar o token do usuário utilizando a Biblioteca JWT
export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Recebe o token do usuario enviado pelo headers
    const {  authorization  } = req.headers

    if(!authorization) {
        return res.status(401).json({
            Error : "Token Não Encontrado"
        })
    }

    // Verifica o Token do usuário com a Biblioteca JWT
    jwt.verify(authorization, authSecret.secret, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                Error : "Token Invalido"
            })
        }
    })

    //Caso haja um Token valido a requisição é enviada para o Controller
    return next()
}
