// Importar uma dependência (express)
const express = require("express")

// Rodar o nunjucks
const nunjucks = require("nunjucks")

// Importar as rotas
const routes = require("./routes")

// Criando o servidor (executando o express)
const server = express()

// Configurar o servidor para usar arquivos estáticos:
server.use(express.static("public"))

// Fazer o server usar o routes
server.use(routes)

// Configurar a template engine:
server.set("view engine", "njk")
nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache: true
})

// Criando rotas:
/*
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
})*/

// Iniciando o servidor
server.listen(5000, function(){
    console.log('sever is running')
})
