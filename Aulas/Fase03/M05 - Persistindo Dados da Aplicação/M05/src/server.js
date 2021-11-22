// Importar uma dependência (express)
const express = require("express")

// Rodar o nunjucks
const nunjucks = require("nunjucks")

// Método Override para utilizar os verbos PUT e Delete
const methodOverride = require('method-override')

// Importar as rotas
const routes = require("./routes")

// Criando o servidor (executando o express)
const server = express()

// Configurando o req.body
server.use(express.urlencoded({ extended: true }))

// Configurar o servidor para usar arquivos estáticos:
server.use(express.static("public"))

// Configurar o método override
server.use(methodOverride('_method'))

// Fazer o server usar o routes
server.use(routes)

// Configurar a template engine:
server.set("view engine", "njk")
nunjucks.configure("src/app/views",{
    express: server,
    autoescape: false,
    noCache: true
})

// Iniciando o servidor
server.listen(5000, function(){
    console.log('sever is running')
})
