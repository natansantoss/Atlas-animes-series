import {  Router  } from 'express'

//Middleware para verificar o Token do usuário
import authMIddleware from './app/middlewares/authMiddleware'
import userController from './app/controllers/userController'

import animeController from './app/controllers/AnimeController'
import serieController from './app/controllers/SerieController'

const routes = Router()

// Rotas de Cadastro e Login
routes.post('/register', userController.register)
routes.post('/auth', userController.authenticate)

// Rotas para Listar, Selecionar um unico Anime, Salvar e Deletar um anime do banco de dados "animes"
routes.get('/listanimes', authMIddleware, animeController.index)
routes.get('/anime', animeController.unique)
routes.post('/createanime', animeController.create)
routes.delete('/deleteanime', authMIddleware, animeController.delete)

// Rotas para Listar, Selecionar uma unica Série, Salvar e Deletar uma série do banco de dados "séries"
routes.get('/listseries', authMIddleware, serieController.index)
routes.get('/serie', serieController.unique)
routes.post('/createserie', serieController.create)
routes.delete('/deleteserie', authMIddleware, serieController.delete)

export default routes
