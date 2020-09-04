import express from 'express'
import cors from 'cors'
import "reflect-metadata"

// Importa a conexão com o Banco de Dados
import './database/connect.ts'
import routes from './router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Server is Running"))
