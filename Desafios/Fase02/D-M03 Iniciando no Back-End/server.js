// Construindo o servidor
const express = require("express")
const nunjucks = require("nunjucks")

const cursos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', "njk")
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("courses", {ItensCursos: cursos})
})

server.get("/course/:id", function(req, res) {
    const id = req.params.id;

    const curso = cursos.find((curso) => curso.id == id) 

    if(!curso) return res.status(404).render("not-found");
    
    return res.render("course", {item: cursos})
});

server.get('/about', function(req, res){
    return res.render("about")
})


server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function(){
    console.log('server is running')
})

