import {  Request, Response  } from 'express'
import {  getRepository  } from 'typeorm'

import Animes from '../models/Animes'

class AnimeController{
    // Lista todos os Animes de um usuário
    async index(req: Request, res: Response){
        const repository = getRepository(Animes)

        const {  id  } = req.headers

        const animes = await repository.find({  where: {user_id: id}  })
        if(animes.length === 0){
            return res.status(400).json({
                Error: "Nenhum Anime Encontrado"
            })
        }
        
        return res.status(200).json(animes)
    }

    // Seleciona um unico anime
    async unique(req: Request, res: Response){
        const repository = getRepository(Animes)
        
        const {  mal_id  } = req.headers

        const anime = await repository.findOne({  where: {mal_id}  })
        if(!anime){
            return res.status(400).json({
                Error: "Nenhum Anime Encontrado"
            })
        }
        
        return res.status(200).json(anime)
    }

    // Cadastra um novo anime no banco de dados
    async create(req: Request, res: Response){
        const repository = getRepository(Animes)

        const {
            mal_id,
            title,
            synopsis,
            image,
            user_id
        } = req.body
        
        try{
            const anime = repository.create({
                mal_id,
                title,
                synopsis,
                image,
                user_id
            })
            await repository.save(anime)

            return res.status(200).json({
                Message: "Anime cadastrado com sucesso"
            })
        } catch{
            return res.status(400).json({
                Error: "Erro ao salvar o anime selecionado"
            })
        }
    }
    
    // Deleta um anime do banco de dados
    async delete(req: Request, res: Response){
        const repository = getRepository(Animes)

        const {  id  } = req.headers

        try{
            await repository.delete({  id  })

            return res.status(200).json({
                Message: "Anime Removido com Sucesso"
            })
        } catch{
            return res.status(400).json({
                Error: "Erro ao Remover o Anime"
            })
        }
    }

}

export default new AnimeController
