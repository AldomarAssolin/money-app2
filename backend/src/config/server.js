

const port = 3004

//referência a middlewares
//const bodyParser = require('body-parser')//entrega o corpo do arquivo.
const express = require('express')
const server = express()//retorna um novo servidor
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server