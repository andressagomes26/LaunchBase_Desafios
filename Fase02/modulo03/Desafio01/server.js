const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))


server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server
})

server.get('/', function(req, res){
    return res.render("inicial")
})

server.get('/sobre', function(req, res){
    return res.render("sobre")
})

server.get('/conteudos', function(req, res){
    return res.render("conteudos")
})

server.listen(5000, function(){
    console.log('server is running')
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  });
  