// Construindo o servidor
const express = require("express")
const nunjucks = require("nunjucks")

const cursos = require('./data')

const server = express()

server.use(express.static('public'))
server.set('view engine', "njk")

nunjucks.configure('views', {
    express: server
})

server.get('/', function(req, res){
    return res.render("about")
})

server.get("/courses", function(req, res){
    return res.render("courses", {ItensCursos: cursos})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function(){
    console.log('server is running')
})

