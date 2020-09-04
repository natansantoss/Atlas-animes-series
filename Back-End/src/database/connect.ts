import {  createConnection  } from 'typeorm'

// Cria a conexão com o Banco de Dados utilizadno o arquivo "ormconfig.json"
createConnection().then(() => console.log("Connected in the DataBase"))