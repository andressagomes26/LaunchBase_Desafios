const express = require('express')
const nunjucks = require('nunjucks')
const info_conteudos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server, 
    autoescape: false
})

server.get('/', function(req, res){
    return res.render("inicial")
})

server.get('/sobre', function(req, res){
    const about = {
        imagem:'https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0.jpg',
        titulo:'Rocketeseat',
        desc1: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
        desc2:'Principais Tecnologias',
        links1: [
            {url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript', name:'JavaScript'},
            {url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML', name:'HTML'},
            {url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS', name:'CSS'},
        ],
        links2: [
            {url: 'https://github.com/Rocketseat', name:'GitHub'},
            {url: 'https://www.instagram.com/rocketseat_oficial/?hl=pt-br', name:'Instagram'},
            {url: 'https://www.facebook.com/rocketseat', name:'Facebook'},
        ]
    }
    return res.render("sobre", { about })
})

server.get('/conteudos', function(req, res){
    return res.render("conteudos", { infos: info_conteudos })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const pageId = info_conteudos.find(function(pageId){
        return pageId.id == id
    })

    if(!pageId){
        return res.send('page not found')
    }
    return res.render('courses', {info: pageId});
});

server.listen(5000, function(){
    console.log('server is running')
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });
  