import {  Request, Response  } from 'express'
import {  getRepository  } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/Users'
import authSecret from '../config/auth.json'

//função para gerar o Token do usuario utilizadno a Biblioteca Bcrypt
function generateToken(params: {}) {
    return jwt.sign(params, authSecret.secret, {expiresIn: 86400})
}

class UserController{
    // Função para que o Usuário possa se Registar na aplicação
    async register(req: Request, res: Response) {
        // Salva as funções do Model User na const Repository
        const repository = getRepository(User)

        const {
            name,
            email,
            password
        } = req.body
        
        // Verifica se existe um usuário com o email enviado no banco de dados
        const userExists = await repository.findOne({  where: {  email  }  })
        if(userExists) {
            return res.status(409).json({
                Error: "Email já Cadastrado"
            })
        }

        // Cria a entidade e salva as informações no banco de dados
        const user = repository.create({
            name,
            email,
            password
        })
        await repository.save(user)

        // Utiliza o ID do usuário para gerar um Token unico
        const token = generateToken({
            // Params, informação unica de cada usuário
            id: user.id
        })

        delete user.password
        return res.status(200).json({
            user,
            token
        })
    }

    // Função para que o Usuário possa se autenticar na aplicação
    async authenticate(req: Request, res: Response) {
        // Salva as funções do Model User na const Repository
        const repository = getRepository(User)

        const {
            email,
            password
        } = req.body

        // Verifica se existe um usuário com o email enviado no banco de dados
        const user = await repository.findOne({ where: { email }  })
        if(!user){
            return res.status(400).json({
                Error: "Usuário Não Encontrado"
            })
        }

        // Compara a senha enviada pelo usuário com o Hash salvo no banco de dados
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) {
            return res.status(401).json({
                Error: "Senha Incorreta"
            })
        }
        
        // Utiliza o ID do usuário para gerar um Token unico
        const token = generateToken({
            // Params, informação unica de cada usuário
            id: user.id
        })

        delete user.password
        res.status(200).json({
            user,
            token
        })
    }
}

export default new UserController