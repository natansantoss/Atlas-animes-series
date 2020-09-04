import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Series from "../models/Series";

class SerieController{
    // Lista todas as séries de um usuário
    async index(req: Request, res: Response){
        const repository = getRepository(Series)

        const {  id  } = req.headers

        const series = await repository.find({  where: {user_id:id}  })

        if(series.length === 0){
            return res.status(400).json({
                Error: "Nenhuma Série Encontrada"
            })
        }
        
        return res.status(200).json(series)
    }

    // Seleciona uma unica série
    async unique(req: Request, res: Response){
        const repository = getRepository(Series)

        const {  id  } = req.headers

        const serie = await repository.findOne({  where: {id}  })
        if(!serie){
            return res.status(400).json({
                Error: "Nenhuma Série Encontrada"
            })
        }
        
        return res.status(200).json(serie)
    }

    // Cadastra uma nova série no banco de dados
    async create(req: Request, res: Response){
        const repository = getRepository(Series)

        const {
            name,
            image_thumbnail_path,
            user_id
        } = req.body

        try{
            const serie = repository.create({
                name,
                image_thumbnail_path,
                user_id
            })
            await repository.save(serie)

            return res.status(200).json({
                Message: "Série cadastrada com sucesso"
            })
        } catch{
            return res.status(400).json({
                Error: "Erro ao salvar a série selecionada"
            })
        }
    }

    // Deleta uma série do banco de dados
    async delete(req: Request, res: Response){
        const repository = getRepository(Series)

        const {  id  } = req.params

        try{
            await repository.delete({  id  })

            return res.status(200).json({
                Message: "Série Removida com Sucesso"
            })
        } catch{
            return res.status(400).json({
                Error: "Erro ao Remover a Série"
            })
        }
    }
}

export default new SerieController