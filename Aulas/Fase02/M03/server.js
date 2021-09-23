/*
    // Criando o servidor:
        1. Instalando o gerenciador de pacotes (NPM): npm init -y;
        2. Usando o NPM para instalar o express (série de arquivos/dependências) para criar o servidor: npm install express;
        3. Começar o servidor:
            3.1: Importar uma dependência // Chamar o express para uma variável: const express = require("express");
            3.2: Criar um servidor // Server vai executar o express: const server = express();
            3.3: Criar uma rota: 
                -> req: Requisição / Pedido do cliente;
                -> res: Resposta / Resposta do servidor;
                -> Renderizar o index.html como resposta: server.get("/", function(req, res){
                    return res.render("index")
                })

                render: renderizar
                send: enviar algo 

            3.4: Iniciar o servidor: npm start;

    // Reiniciar o servidor: Ctrl + C

    // Para reiniciar o servidor automaticamente: 
        1. Instalar o nodemon: npm install -D nodemon
        2. No package.json: "start": "nodemon server.js"

    // Para trabalhar com template engine: serve para reuso de código
        1. Instalar o nunjucks: npm install nunjucks
        2. Rodar o nunjucks: const nunjucks = require("nunjucks")
        3. Configurar a template engine: motor de view = html; 
        4. Configurar com nunjucks:
        nunjucks.configure(caminho, opções)
            -> autoescape: false   = serve para fazer com que o nunkjucks reconheça os cógidos html que são colocados dentro de variáveis
    // Configurar o servidor para usar arquivos estáticos:
        1. server.use(express.static("puclic"))

    // Importar um arquivo que não foi instalado pelo nunjucks
        1. const videos = require("./data")

    // Recuperar dados do Back-end e enviá-los para o front-end (na pág 'potfolio'):
        1. server.get("/portfolio", function(req, res){
                return res.render("portfolio", { itens: video })
            })
        */

// Importar uma dependência (express)
const express = require("express")

// Rodar o nunjucks
const nunjucks = require("nunjucks")

// Criando o servidor (executando o express)
const server = express()

// Importar um arquivo que não foi instalado pelo nunjucks
const videos = require("./data")

// Configurar o servidor para usar arquivos estáticos:
server.use(express.static("public"))

// Configurar a template engine:
server.set("view engine", "njk")
nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache: true
})

// Criando rotas:
server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars.githubusercontent.com/u/60404990?v=4",
        name: "Andressa Gomes",
        role: "Diagramadora web",
        description: 'Diagramadora web e mobile na empresa <a href="http://dellead.com.br" target="_blank">Dell Lead</a>',
        links: [
            {name: "GitHub", url: "https://github.com/"},
            {name: "Linkedin", url: "https://linkedin.com/"},
            {name: "Twitter", url: "https://twitter.com/"}
        ]
    }
    return res.render("about", {about})
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio",{itens: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id
    
    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video){
        return res.send("Video not found!")
    }

    return res.render("video", {item: video})
})
// Iniciando o servidor
server.listen(5000, function(){
    console.log('sever is running')
})
